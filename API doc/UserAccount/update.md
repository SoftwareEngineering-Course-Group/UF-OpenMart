# Update User's Account

Update an Account for the authenticated User

**URL** : `/api/update/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : Need token

**Data constraints**

Provide unique email of Account

Provide unique name of Account.

```json
{
    "id":"[primary key, must be unique, not null]",
    "name":"[must be unique,not null]",
    "email":"[must be unique,not null]",
    "password":"[not null]",
    "phone":"[not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "id": 1,
    "name":"chen",
    "email":"c@",
    "phone":"111",
    "password":"111"
}
```

## Success Response

**Condition** : If the value after the update is the same as the value before.

**Code** : `200 OK`

**Content** : `{
    "message": "Success"
}`
## or

**Condition** : If the updated name and email are different from the previous values

**Code** : `200 OK`

**Content** : `{
    "message": "Successful update name and email"
}`
## Error Response

**Condition** : If the update name or email are the same as those of other users

**Code** : `400 Bad Request`

**Content** : `{
    "message": "Already exist same name or email"
}`
