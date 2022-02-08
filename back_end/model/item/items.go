package item

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