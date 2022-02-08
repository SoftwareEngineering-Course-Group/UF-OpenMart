package user

type User struct {
	ID            uint   `gorm:"primaryKey;autoIncrement"`
	Name          string `gorm:"not null;unique"`
	Password      string `gorm:"not null"`
	Email         string `gorm:"not null;unique"`
	Phone         string `gorm:"not null"`
	nonce         string
	publicAddress string
}