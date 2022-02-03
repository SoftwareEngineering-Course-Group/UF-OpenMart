
# Login User Account

Login to an Account for the authenticated User already in database.

**URL** : `/api/login/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide  email and password of Account.

```json
{
    "email": "[must be unique]",
    "password": "[not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "email": "pauldhuang@hotmail.com",
    "password": "12345"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `200 OK`

**Content**:
```json
{
    "id": "[user_id(PK)]",
    "token": ".........."
}
```

## Error Responses

**Condition** : If Email or Password not found in database.

**Code** : `401 Unauthorized `

**Content** : `{"error": "[errorinfo]"}`

