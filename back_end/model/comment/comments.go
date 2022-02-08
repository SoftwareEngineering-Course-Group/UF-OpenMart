package comment

type Comment struct {
	ID        uint `gorm:"primaryKey;autoIncrement"`
	UserID    uint //foreign key to User
	ItemID    uint //foreign key to Item
	Content   string
	CreatedAt time.Time
}



