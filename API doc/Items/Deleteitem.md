
# Delete Item
Delete the Item from database.

**URL** : `/user/:id/item/:pid/update`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Provide the item ID for deletion
```json
{
    "id":[primary key, must be unique, not null],
}
```
**Data example** All fields must be sent.

```json
{
    "id":1,
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
