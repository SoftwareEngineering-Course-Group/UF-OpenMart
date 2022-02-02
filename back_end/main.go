package main

import (
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"time"
)

type User struct {
	gorm.Model
	ID            uint   `gorm:"primaryKey,autoIncrement"`
	Name          string `gorm:"unique"`
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
	r := gin.New()
	r.Run()
}

type Handler struct {
	db *gorm.DB
}

func newHandler(db *gorm.DB) *Handler {
	return &Handler{db}
}
