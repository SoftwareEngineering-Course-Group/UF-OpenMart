
# Delete a Comment

Delete an record of comment .

**URL** : `/user/:id/comment/delete`

**Method** : `POST`

**Auth required** : YES 

**Permissions required** : YES

**Data constraints**

Provide id of comment.

```json
{
    "id": "[not null]",
}
```

**Data example** All fields must be sent.

```json
{
    "id": 1,
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 CREATED`


## Error Responses

**Condition** : Authentication Fail.

**Code** : `401 BadRequest`

