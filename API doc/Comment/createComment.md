
# Create Comment

Create an record of comment .

**URL** : `/user/:id/item/:pid/comment/save`

**Method** : `POST`

**Auth required** : YES 

**Permissions required** : YES

**Data constraints**

Provide unique name of Account.

```json
{
    "user_id": "[not null]",
    "user_name": "[not null]",
    "item_id": "[not null]",
    "content": "[not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "UserID": 1,
    "UserName": "qirui",
    "ItemID": 1,
    "Content": "hello"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `201 CREATED`


## Error Responses

**Condition** : Authentication Fail.

**Code** : `401 BadRequest`

