# Delete User's Account

Delete an Account for the authenticated User

**URL** : `/api/delete/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Need token

**Data constraints**

Provide unique email of Account.

```json
{
    "email":"[must be unique, not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "email": "pauldhuang@hotmail.com",
}
```

## Success Response

**Condition** : If Account already exists for User.

**Code** : `200 OK`

**Content** : `{
    "message": "Successfully delete!"
}`


## Error Responses

**Condition** : If an Account didn't exist for this User.

**Code** : `400 Bad Request`

**Content** : `{
    "message": "User Not Exist!"
}`
