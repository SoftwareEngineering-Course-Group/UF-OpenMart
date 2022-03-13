

  
# Get Item's information by Name in price Ascending order
 
Post a name of items, the server will return all the corresponding items in price ascending order .

**URL** : `/user/:id/item/name/:name/PRA`

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
