
# Update Item's Infomation
Specify the item&user ID and upload the photos the  server,.

**URL** : `/user/:id/item/:pid/update`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Provide file path with not null files to the sever.

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
