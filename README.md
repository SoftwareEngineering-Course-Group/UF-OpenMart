
# UF-OpenMart

## Group Member
|           |    Name     | Gator Id |  Email          |
| :-------: | :---------: | :------: | :-------------: |
| Front End |  Yangbo Yu  | 29077422 |yuyangbo@ufl.edu |
|           |  Jiayu Li   | 97571686 |li.j@ufl.edu     |
| Back  End | Qirui Huang | 27846056 |huangqirui@ufl.edu|
|           | Haowen Chen | 81411485 |chenhaowen@ufl.edu|



## Table of Contents
1. [User Story](#UserStory)

2. [Description](#Description)

3. [Work be Done](#Work)

4. [Results and Performance](#Test)

5. [How to Use](#Use)

6. [Other Info](#Other Info)



<a name="UserStory"></a>·

I. User Story
----
#### As a customer:
* I want to find a market that list all the used items with fair price.
* so that an online second-hand market needed to be built.
#### As a seller:
* I want to find a market that can sell my used items to get some cash back.
* so that an online second-hand market needed to be built.
#### As a bussinessman:
* I want to spend less time finding a market that can compare used item together to find the most proper one for me.
* so that a market need to catagorize the items by tags or attribute.
#### As a student:
* I want to find a market that can compares used item together to find the most cheap one for me.
* so that a market need to mark all the items' price and rearrage the order of item with specific requirements.
#### As a seller/customer who wants to protect his/her privacy:
* I want to find a online market that require less personal infomation.
* so that the market need to reduce personal information collection and focus on making connection between the sellers and customers .
 #### As a crypto lover(optional):
* I want to find a online market that can use Crypto coin to make the payment.
* so that the market need to connect to `WEB3` wallet.
### 

<a name="Description"></a>·

II. Description
----
### Backend stack:
* Framework: `Gin`
* ORM: `Gorm`
* Database:`Sqlite3`
* Authentication method: `jwt`

### Frontend stack:
* Framework: 'React'
* UI: 'semantic-UI'


<a name="Work"></a>·
III. Work Be Done
----
### Sprint1
#### Backend accomplishment
>Youtube link:https://youtu.be/3OuogkDnrHo
* UML design for database
* Database creation(User, Item, Comment)
* User model implementation of CRUD
* User login
* Corresponding API doc for User Accont
* API tests by Postman
* Deploying the test backend in VPS
#### Frontend accomplishment
* Details in https://www.youtube.com/watch?v=Y6CHfpEtx-E&t=99s
* UI for 6 pages including Home, Profile, Detail, Login, Register.
* login and register function.
* realizes jumping the pages and  simple interaction with users.

----
### Sprint2
#### Backend accomplishment
* Almost all of APIs
* API doc for Users and Items
* gotest for Unittest
* API tests by Postman and Curl

#### Frontend accomplishment
* Modified some part of user flow
* add post item function and the page.
* implement token authentication in each request.
* use cypress to test
* ![image](https://github.com/SoftwareEngineering-Course-Group/UF-OpenMart/blob/main/Images/ezgif-4-93b1a5a8d9.gif)

----
### Sprint3
#### Backend accomplishment
* More APIs for Comment module and item module as front-end needed
* All the developed APIs with corresponding doc
* More gotest for Unittest
* All the API tests by Postman and Curl
* read.md in backend file shows how to run
* More screenshots for test result

#### Frontend accomplishment
* Add collection function
* Get items have been published and show.
* Add comment function(have not connected to backend).
* Get item randomly and show on home page.


<a name="Use"></a>·
III. How To Use
----
#### Frontend 
* Download all in frontend folder
* Set up development environment for React
* Run npm start in the project folder and open http://localhost:3000 in the browser

