package main

import (
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

type User struct {
	ID            uint   `gorm:"primaryKey;autoIncrement"`
	Name          string `gorm:"not null;unique"`
	Password      string `gorm:"not null"`
	Email         string `gorm:"not null;unique"`
	Phone         string `gorm:"not null"`
	nonce         string
	publicAddress string
}

type Item struct {
	ID          uint `gorm:"primaryKey;autoIncrement"`
	Price       float32
	UserID      uint //foreign key to User
	Catagory    string
	Name        string
	Description string
	Status      bool
	Image       string
	CreatedAt   time.Time
}

type Comment struct {
	ID        uint   `gorm:"primaryKey;autoIncrement"`
	UserID    uint   `gorm:"not null"`
	UserName  string `gorm:"not null"`
	ItemID    uint   `gorm:"not null"`
	Content   string
	CreatedAt time.Time
}

func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	db, err := gorm.Open(sqlite.Open(" sqlite.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	handler := newHandler(db)
	r.GET("/user/:id", handler.getUser)
	r.POST("/auth", handler.loginHandler)
	r.POST("/user/:id/remove", handler.DeleteUser)
	r.POST("/sign-up", handler.createUser)
	r.POST("/user/:id/update", handler.UpdateUser)

	r.POST("/user/:id/item/save", handler.createItem)
	r.POST("/user/:id/item/:pid/update", handler.updateItem)
	r.POST("/user/:id/item/:pid/remove", handler.deleteItem)
	r.POST("/user/:id/item/:pid/updatePh", handler.updatePh)

	r.POST("/user/:id/item/:pid", handler.getItembyID)
	r.POST("/user/:id/item/list", handler.getItembyUser)

	r.GET("/user/:id/item/category/:cate", handler.getItembyCAT)
	r.GET("/user/:id/item/category/:cate/PRD", handler.getItembyCATPRD)
	r.GET("/user/:id/item/category/:cate/PRA", handler.getItembyCATPRA)
	r.GET("/user/:id/item/category/:cate/LT", handler.getItembyCATLT)

	r.GET("/user/:id/item/name/:name", handler.getItembyName)
	r.GET("/user/:id/item/name/:name/PRD", handler.getItembyNamePRD)
	r.GET("/user/:id/item/name/:name/PRA", handler.getItembyNamePRA)
	r.GET("/user/:id/item/name/:name/LT", handler.getItembyNameLT)

	r.POST("/user/:id/item/:pid/comment/save", handler.createComment)
	r.POST("/user/:id/comment/delete", handler.deleteComment)
	r.GET("/user/:id/item/:pid/comment/itemList", handler.queryCommentbyItem)
	r.GET("/user/:id/item/:pid/comment/userList", handler.queryCommentbyUser)
	return r
}


func main() {
	db, err := gorm.Open(sqlite.Open(" sqlite.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	User_err := db.AutoMigrate(&User{})
	if User_err != nil {
		return
	}
	Item_err := db.AutoMigrate(&Item{})
	if Item_err != nil {
		return
	}
	Comment_err := db.AutoMigrate(&Comment{})
	if Comment_err != nil {
		return
	}
	handler := newHandler(db)

	r := gin.New()

	r.Use(CORS())

	r.POST("/auth", handler.loginHandler)
	r.POST("/sign-up", handler.createUser)

	protected := r.Group("/", authorizationMiddleware)
	protected.GET("/user/:id", handler.getUser)
	protected.POST("/user/:id/remove", handler.DeleteUser)
	protected.POST("/user/:id/update", handler.UpdateUser)

	protected.POST("/user/:id/item/save", handler.createItem)
	protected.POST("/user/:id/item/:pid/update", handler.updateItem)
	protected.POST("/user/:id/item/:pid/remove", handler.deleteItem)
	protected.POST("/user/:id/item/:pid/updatePh", handler.updatePh)

	protected.POST("/user/:id/item/:pid", handler.getItembyID)
	protected.POST("/user/:id/item/list", handler.getItembyUser)

	protected.GET("/user/:id/item/category/:cate", handler.getItembyCAT)
	protected.GET("/user/:id/item/category/:cate/PRD", handler.getItembyCATPRD)
	protected.GET("/user/:id/item/category/:cate/PRA", handler.getItembyCATPRA)
	protected.GET("/user/:id/item/category/:cate/LT", handler.getItembyCATLT)

	protected.GET("/user/:id/item/name/:name", handler.getItembyName)
	protected.GET("/user/:id/item/name/:name/PRD", handler.getItembyNamePRD)
	protected.GET("/user/:id/item/name/:name/PRA", handler.getItembyNamePRA)
	protected.GET("/user/:id/item/name/:name/LT", handler.getItembyNameLT)

	protected.POST("/user/:id/item/:pid/comment/save", handler.createComment)
	protected.POST("/user/:id/comment/delete", handler.deleteComment)
	protected.GET("/user/:id/item/:pid/comment/itemList", handler.queryCommentbyItem)
	protected.GET("/user/:id/item/:pid/comment/userList", handler.queryCommentbyUser)

	Run_err := r.Run(":12345")
	router := setupRouter()
	router.Run(":8080")
	if Run_err != nil {
		return
	}
}

type Handler struct {
	db *gorm.DB
}

func newHandler(db *gorm.DB) *Handler {
	return &Handler{db}
}

func authorizationMiddleware(c *gin.Context) {
	s := c.Request.Header.Get("Authorization")

	token := strings.TrimPrefix(s, "Bearer ")

	if err := validateToken(token); err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}
}

func validateToken(token string) error {
	_, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}

		return []byte("Openmart"), nil
	})

	return err
}

func (h *Handler) QueryUserByEmailAndPassword(email, password string) (user User, err error) {
	return user, h.db.Model(&User{}).Where("email = ? and password = ?", email, password).Take(&user).Error
}

//user login
func (h *Handler) loginHandler(c *gin.Context) {
	// implement login logic here
	json := User{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}

	var (
		user User
		err1 error
	)

	if user, err = h.QueryUserByEmailAndPassword(json.Email, json.Password); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": err1.Error(),
		})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &jwt.StandardClaims{
		ExpiresAt: time.Now().Add(5 * time.Minute).Unix(),
	})

	ss, err := token.SignedString([]byte("Openmart"))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"id":    user.ID,
		"name" : user.Name,
		"email" : user.Email,
		"token": ss,
	})
}

//create user
func (h *Handler) createUser(c *gin.Context) {
	var user User
	if err := c.BindJSON(&user); err != nil {
		return
	}
	dbRresult := h.db.Where("email = ?", user.Email).Where("name = ?", user.Name).First(&user)
	if errors.Is(dbRresult.Error, gorm.ErrRecordNotFound) {
		if result := h.db.Create(&user); result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "User already exist!",
			})
			return
		}
		c.JSON(http.StatusCreated, gin.H{
			"message": "success!",
		})
		return
	}
	c.JSON(http.StatusBadRequest, gin.H{
		"error": "User already exist!",
	})

}

//Delete User
func (h *Handler) DeleteUser(c *gin.Context) {
	json := User{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	if err := h.db.Where("id", json.ID).Delete(&json).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Internal Error!"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Success"})
}

//Update User
func (h *Handler) UpdateUser(c *gin.Context) {
	json := User{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	if err := h.db.Model(&json).Where("id = ?", json.ID).Update("phone", json.Phone).Update("password", json.Password).Error; err != nil {
		c.JSON(http.StatusOK, gin.H{"message": "failed"})
	}
	dbRresult := h.db.Where("email = ?", json.Email).Where("name = ?", json.Name).First(&json)
	if errors.Is(dbRresult.Error, gorm.ErrRecordNotFound) {
		if err := h.db.Model(&json).Where("id = ?", json.ID).Update("name", json.Name).Update("email", json.Email).Update("phone", json.Phone).Update("password", json.Password).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "User exist"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successful update name and email"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Success"})
}

//get User
func (h *Handler) getUser(c *gin.Context) {
	var user = User{}
	id := c.Param("id")
	h.db.Where("id = ?", id).First(&user)
	c.JSON(http.StatusOK, gin.H{"name": user.Name, "email": user.Email, "phone": user.Phone})
}

//create Item
func (h *Handler) createItem(c *gin.Context) {
	//Get uploaded files
	id := c.Param("id")
	intVar, _ := strconv.Atoi(id)
	var item = Item{UserID: uint(intVar)}
	h.db.Create(&item)
	dir := "./item/image/" + strconv.Itoa(int(item.ID))
	if err := os.MkdirAll(dir, os.ModePerm); err != nil {
		log.Fatal(err)
	}
	form, _ := c.MultipartForm()
	files := form.File["upload[]"]
	for _, file := range files {
		log.Print(file.Filename)
		path.Join(dir, file.Filename)
		dir_ := dir + "/"
		dst := path.Join(dir_, file.Filename)
		print(dst)
		//Upload files to the specified directory
		err := c.SaveUploadedFile(file, dst)
		if err != nil {
			c.JSON(http.StatusNoContent, gin.H{"message": "files error!"})
			return
		}
	}
	c.JSON(http.StatusOK, gin.H{
		"item_id": item.ID,
		"message": fmt.Sprintf("%d files uploaded!", len(files)),
	})
}

//update Item
func (h *Handler) updateItem(c *gin.Context) {
	//Get uploaded files
	json := Item{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	//	Catagory    string
	//	Name        string
	//	Description string
	//	price       float32
	//	status      bool
	//	Image       string
	//	CreatedAt   time.Time
	dir := "/item/image/" + strconv.Itoa(int(json.ID)) + "/"
	if err := h.db.Model(&json).Where("id = ?", json.ID).Update("catagory", json.Catagory).Update("name", json.Name).Update("description", json.Description).Update("price", json.Price).Update("status", json.Status).Update("image", dir).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}
	c.JSON(http.StatusOK, &json)
}

//update Item Photo give item id
func (h *Handler) updatePh(c *gin.Context) {
	//Get uploaded files
	pid := c.Param("pid")
	intVar, _ := strconv.Atoi(pid)

	absPath, _ := filepath.Abs("../back_end/item/image/" + strconv.Itoa(intVar))
	files, err := ioutil.ReadDir(absPath)
	if err != nil {
		log.Fatal(err)
	}

	for _, file := range files {
		dir_name := absPath + "/" + file.Name()
		print(dir_name)
		err := os.Remove(dir_name)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err})
			return
		}
	}

	dir := "./item/image/" + strconv.Itoa(intVar)

	form, _ := c.MultipartForm()
	files_ := form.File["upload[]"]
	for _, file := range files_ {
		log.Print(file.Filename)
		path.Join(dir, file.Filename)
		dir_ := dir + "/"
		dst := path.Join(dir_, file.Filename)
		print(dst)
		//Upload files to the specified directory
		err := c.SaveUploadedFile(file, dst)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err})
			return
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"item_id": intVar,
		"message": fmt.Sprintf("%d files uploaded!", len(files_)),
	})
}

//delete Item by itemid
func (h *Handler) deleteItem(c *gin.Context) {
	//delete files
	json := Item{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	if err := h.db.Where("id ", json.ID).Delete(&json).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully delete!"})
}

//get Item by User ID return items
func (h *Handler) getItembyUser(c *gin.Context) {
	json := Item{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	var result []Item
	h.db.Table("items").Where("user_id <> ?", json.UserID).Scan(&result)
	c.JSON(http.StatusOK, result)
}

//get item by ID return all the info
func (h *Handler) getItembyID(c *gin.Context) {
	json := Item{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	if err := h.db.First(&json, json.ID).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
	}

	absPath, _ := filepath.Abs("../back_end" + json.Image)
	files, err := ioutil.ReadDir(absPath)
	if err != nil {
		log.Fatal(err)
	}

	var lists = make([]string, 0)
	for _, file := range files {
		dir_name := json.Image + file.Name()
		lists = append(lists, dir_name)
	}

	print(len(lists))

	type Entity struct {
		Catagory    string
		Name        string
		Description string
		Files       []string
		Price       float32
		Status      bool
		CreatedAt   time.Time
	}

	data_item := &Entity{
		Files:       lists,
		Catagory:    json.Catagory,
		Name:        json.Name,
		Description: json.Description,
		Price:       json.Price,
		CreatedAt:   json.CreatedAt,
		Status:      json.Status,
	}
	c.JSON(http.StatusOK, data_item)
}

//get Item by catagory return items
func (h *Handler) getItembyCAT(c *gin.Context) {
	cate := c.Param("cate")
	var result []Item
	h.db.Table("items").Where("catagory = ?", cate).Where("status = 0").Scan(&result)
	c.JSON(http.StatusOK, result)
}

//get Item order by price desc
func (h *Handler) getItembyCATPRD(c *gin.Context) {
	cate := c.Param("cate")
	var result []Item
	h.db.Table("items").Where("catagory = ?", cate).Where("status = 0").Order("price desc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//get Item order by price asc
func (h *Handler) getItembyCATPRA(c *gin.Context) {
	cate := c.Param("cate")
	var result []Item
	h.db.Table("items").Where("catagory = ?", cate).Where("status = 0").Order("price asc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//get items by latest time
func (h *Handler) getItembyCATLT(c *gin.Context) {
	cate := c.Param("cate")
	var result []Item
	h.db.Table("items").Where("catagory = ?", cate).Where("status = 0").Order("id desc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//get items by name
func (h *Handler) getItembyName(c *gin.Context) {
	name := c.Param("name")
	var result []Item
	h.db.Table("items").Where("name = ?", name).Where("status = 0").Scan(&result)
	c.JSON(http.StatusOK, result)
}

//get items by name PRD
func (h *Handler) getItembyNamePRD(c *gin.Context) {
	name := c.Param("name")
	var result []Item
	h.db.Table("items").Where("name = ?", name).Where("status = 0").Order("price desc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//get items by name ASC
func (h *Handler) getItembyNamePRA(c *gin.Context) {
	name := c.Param("name")
	var result []Item
	h.db.Table("items").Where("name = ?", name).Where("status = 0").Order("price asc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//get items by latest time
func (h *Handler) getItembyNameLT(c *gin.Context) {
	name := c.Param("name")
	var result []Item
	h.db.Table("items").Where("name = ?", name).Where("status = 0").Order("id desc").Find(&result)
	c.JSON(http.StatusOK, result)
}

//create comment  json UserID ItemID in postman
func (h *Handler) createComment(c *gin.Context) {
	var comment Comment
	if err := c.BindJSON(&comment); err != nil {
		return
	}
	var user User
	h.db.Where("id = ?", comment.UserID).First(&user)
	comment.UserName = user.Name
	h.db.Create(&comment)
	c.JSON(http.StatusCreated, comment)
	return
}

//delete comment
func (h *Handler) deleteComment(c *gin.Context) {
	var comment Comment
	if err := c.BindJSON(&comment); err != nil {
		return
	}
	h.db.Where("id = ?", comment.ID).Delete(&comment)
	c.JSON(http.StatusOK, comment)
	return
}

//query all the comment by itemid
func (h *Handler) queryCommentbyItem(c *gin.Context) {
	pid := c.Param("pid")
	var result []Comment
	h.db.Table("comments").Where("item_id = ?", pid).Find(&result)
	c.JSON(http.StatusOK, result)
}

//query all the comment by userid
func (h *Handler) queryCommentbyUser(c *gin.Context) {
	id := c.Param("id")
	var result []Comment
	h.db.Table("comments").Where("user_id = ?", id).Find(&result)
	c.JSON(http.StatusOK, result)
}
