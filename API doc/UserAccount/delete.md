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
    "id":"[primary key, must be unique, not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "id": "1"
}
```

## Success Response

**Condition** : If Account already exists for User.

**Code** : `200 OK`

**Content** : `{
    "message": "Successfully delete!"
}`
