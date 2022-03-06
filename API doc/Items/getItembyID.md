
  
# Get Item's information by ID

Post a Item ID, the server will return all the information and photos path in Json format.

**URL** : `/user/:id/item/:pid`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Post the item ID.

```json
{
    "id" : "[Item_id PK]"
    ....
}
```

## Success Response

**Code** : `200 Success`

**Content** : 
```json
{
	"Files": [photo1,photo2...], 
	"Catagory": "",  
	"Name": "",  
	"Description": "",  
	"Price": , 
	"CreatedAt":,  
	"Status":   "",

}
```


## Error Response 

**Condition** : Authentication failed

**Code** : `401 Bad Request`

