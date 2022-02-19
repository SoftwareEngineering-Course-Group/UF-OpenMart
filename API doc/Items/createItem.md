
# Create Item's photos and bind userID

Specify the item&user ID and upload the photos the  server,.

**URL** : `/user/:id/item/save`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Yes

Provide file path with not null files to the sever.

```json
curl -X POST /user/id/item \
  -F "upload[]=@" \
  -F "upload[]=@" \
  .....
  -H "Content-Type: multipart/form-data"
```

## Success Response

**Condition** : If everything is OK.

**Code** : `201 CREATED`
## Success Response

**Code** : `200 Success`

**Content** : `"item_id" : item.ID,  
"message" : "len(files) files uploaded!"`

## Error Response 

**Condition** : Authentication failed

**Code** : `401 Bad Request`

**Condition** : upload files error

**Code** : `204 No Content`
