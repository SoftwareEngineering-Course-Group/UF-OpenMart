
  
# Get Item's information by User

Post a User ID, the server will return all the corresponding items.

**URL** : `/user/:id/item/list`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : Yes

## Success Response

**Code** : `200 Success`

**Content** : 
```json
[
{
    "id":,
    "user_id" : 
	"Catagory": "",  
	"Name": "",  
	"Description": "",  
	"Price": , 
	"CreatedAt":,  
	"Status":   "",
	"Image": ""
},
{
    "id":,
    "user_id" : 
	"Catagory": "",  
	"Name": "",  
	"Description": "",  
	"Price": , 
	"CreatedAt":,  
	"Status":   "",
	"Image": ""
},
....]
```


## Error Response 

**Condition** : Authentication failed

**Code** : `401 Bad Request`
