
# Update Item's Infomation
Update the item information with all attriubutes.

**URL** : `/user/:id/item/:pid/update`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Provide json format post request to the server.

```json
{
    "id":[primary key, must be unique, not null],
    "catagory":"[not null]",
    "name":"[not null]",
    "description":"[not null]",
    "price":[not null],
    "status" :"[false(default)]"
}
```
**Data example** All fields must be sent.

```json
{
    "id":1,
    "catagory":"sports",
    "name":"basketball",
    "description":"a basketball with good condition",
    "price":10,
}
```
## Success Response

**Condition** : If everything is OK.

**Code** : `200 Success`

## Error Response 

**Condition** : Authentication failed

**Code** : `401 Bad Request`

**Condition** : Update failed

**Code** : `400 Bad Request`
