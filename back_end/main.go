package main

import (
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/qor/media"
	"github.com/qor/media/oss"
	"net/http"
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
	UserID      uint //foreign key to User
	Catagory    string
	Name        string
	Description string
	price       float32
	status      bool
	Image       oss.OSS `sql:"size:4294967295;" media_library:"url:/backend/{{class}}/{{primary_key}}/{{column}}.{{extension}};path:./private"`
	CreatedAt   time.Time
}
type Comment struct {
	ID        uint `gorm:"primaryKey;autoIncrement"`
	UserID    uint //foreign key to User
	ItemID    uint //foreign key to Item
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

func main() {
	db, err := gorm.Open("sqlite3", "sqlite.db")
	media.RegisterCallbacks(db)

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})
	db.AutoMigrate(&Item{})
	db.AutoMigrate(&Comment{})
	handler := newHandler(db)

	r := gin.New()

	r.Use(CORS())

	r.POST("/login", handler.loginHandler)
	r.POST("/create", handler.createUser)
	protected := r.Group("/", authorizationMiddleware)
	protected.POST("/delete", handler.DeleteUser)
	protected.POST("/update", handler.UpdateUser)
	r.Run(":12345")
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

func (h *Handler) loginHandler(c *gin.Context) {
	// implement login logic here
	json := User{}
	c.BindJSON(&json)

	var (
		user User
		err  error
	)

	if user, err = h.QueryUserByEmailAndPassword(json.Email, json.Password); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": err.Error(),
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
		"token": ss,
	})
}

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
	if err := h.db.Where("id ", json.ID).Delete(&json).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Internal Error!"})
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully delete!"})
}

//Update User
func (h *Handler) UpdateUser(c *gin.Context) {
	json := User{}
	err := c.BindJSON(&json)
	if err != nil {
		return
	}
	if err := h.db.Model(&json).Where("id = ?", json.ID).Update("phone", json.Phone).Update("password", json.Password).Error; err != nil {
		c.JSON(http.StatusOK, gin.H{"message": "No way!"})
	}
	dbRresult := h.db.Where("email = ?", json.Email).Where("name = ?", json.Name).First(&json)
	if errors.Is(dbRresult.Error, gorm.ErrRecordNotFound) {
		if err := h.db.Model(&json).Where("id = ?", json.ID).Update("name", json.Name).Update("email", json.Email).Update("phone", json.Phone).Update("password", json.Password).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"message": "Already exist same name or email"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successful update name and email"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Success"})
}
