
# Get Item's information by Category in Latest time order
 
Post a category, the server will return all the corresponding items in Latest time order .

**URL** : `/user/:id/item/category/:cate/LT`

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
