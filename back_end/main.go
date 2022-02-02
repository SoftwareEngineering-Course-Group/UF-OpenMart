package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"net/http"
	"strings"
	"time"
)

type User struct {
	gorm.Model
	ID            uint   `gorm:"primaryKey,autoIncrement"`
	Name          string `gorm:"unique"`
	Password      string `gorm:"not null"`
	Email         string `gorm:"not null"`
	Phone         string `gorm:"not null"`
	nonce         string
	publicAddress string
}

type Item struct {
	gorm.Model
	ID          uint `gorm:"primaryKey,autoIncrement"`
	UserID      uint //foreign key to User
	Catagory    string
	Name        string
	Description string
	price       float32
	status      bool
	CreatedAt   time.Time
}
type Comment struct {
	gorm.Model
	ID        uint `gorm:"primaryKey,autoIncrement"`
	UserID    uint //foreign key to User
	ItemID    uint //foreign key to Item
	Content   string
	CreatedAt time.Time
}

func main() {
	db, err := gorm.Open(sqlite.Open("sqlite.db"), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})
	db.AutoMigrate(&Item{})
	db.AutoMigrate(&Comment{})
	handler := newHandler(db)
	r := gin.New()
	r.POST("/login", handler.loginHandler)
	//protected := r.Group("/", authorizationMiddleware)
	//protected.GET("/item", handler.listBooksHandler)
	r.Run()
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

		return []byte("MySignature"), nil
	})

	return err
}

type Handler struct {
	db *gorm.DB
}

func newHandler(db *gorm.DB) *Handler {
	return &Handler{db}
}

func (h *Handler) QueryUserByEmailAndPassword(email, password string) (user User, err error) {
	return user, h.db.Model(&User{}).Where("email = ? and password = ?", email, password).Take(&user).Error
}

func (h *Handler) loginHandler(c *gin.Context) {
	// implement login logic here
	json := User{}
	c.BindJSON(&json)

	var (
		_   User
		err error
	)

	if _, err = h.QueryUserByEmailAndPassword(json.Email, json.Password); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": err.Error(),
		})
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &jwt.StandardClaims{
		ExpiresAt: time.Now().Add(5 * time.Minute).Unix(),
	})

	ss, err := token.SignedString([]byte("MySignature"))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"token": ss,
	})
}
