
# Get Comment by itemid

Get all of comments for an item .

**URL** : `/user/:id/item/:pid/comment/itemList`

**Method** : `GET`

**Auth required** : YES 

**Permissions required** : YES



## Success Response

**Condition** : If everything is OK.

**Code** : `200 Sucess`

**Content** : 
```json
[
{
    "id":,
    "user_id" : 
	"item_id": "",  
	"user_name": "",  
	"content": "",  
},
{
    "id":,
    "user_id" : 
	"item_id": "",  
	"user_name": "",  
	"content": "",  
}
....]
```

## Error Responses

**Condition** : Authentication Fail.

**Code** : `401 BadRequest`

