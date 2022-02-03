
# Create User's Account

Create an Account for the authenticated User if an Account for that User does
not already exist. Each User can only have one Account.

**URL** : `/api/create/`

**Method** : `POST`

**Auth required** : NO 

**Permissions required** : None

**Data constraints**

Provide unique name of Account.

```json
{
    "name": "[must be unique,not null]",
    "email": "[must be unique,not null]",
    "password": "[not null]",
    "phone": "[not null]"
}
```

**Data example** All fields must be sent.

```json
{
    "name": "qiruihuang",
    "password": "12345",
    "email": "pauldhuang@hotmail.com",
    "phone": "3528883899"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `201 CREATED`


## Error Responses

**Condition** : If Account already exists for User, which include two situation: username or email already exists.

**Code** : `400 BadRequest`

**Content** : `{"error": "User already exist!"}`
