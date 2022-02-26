
# Update Item's photos
Update the Item images in server files.

**URL** : `/user/:id/item/:pid/updatePh`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Provide the new files path to the server
```json
{
    "upload[]":[filepath],
    "upload[]":[filepath1],
     ...
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 Success`
```json
{
    "item_id": "",
    "message": "%d files uploaded"
}
```

## Error Response 

**Condition** : Authentication failed

**Code** : `401 Bad Request`

**Condition** : Update failed

**Code** : `400 Bad Request`
