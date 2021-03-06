
# UF-OpenMart

## Group Member
|           |    Name     | Gator Id |  Email          |
| :-------: | :---------: | :------: | :-------------: |
| Front End |  Yangbo Yu  | 29077422 |yuyangbo@ufl.edu |
|           |  Jiayu Li   | 97571686 |li.j@ufl.edu     |
| Back  End | Qirui Huang | 27846056 |huangqirui@ufl.edu|
|           | Haowen Chen | 81411485 |chenhaowen@ufl.edu|



## Table of Contents
1. [Project Description](#ProjectDescription)

2. [User Story](#UserStory)

3. [Development Environment](#DevelopmentEnvironment)

4. [Work be Done](#Work)

5. [Tests](#Test)

6. [How to Use](#Use)

（Bonus part at the end of the readme）

<a name="ProjectDescription"></a>
I. Project Description
----
UF-OpenMart is an application that can be used by students at the University of Florida to sell and buy second-handed merchandise. We preserve second-handed items people want to sell and display them in different categories and orders. You can create your account and manage your merchandise properly. It's also easy to favorite some items you want, or you can put some comments below the items. If you want to sell something you don't want but is still functional, you can just click the post icon and put the information on the page.

Project functional video: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/14N0P9JDXI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Cypress test video: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/9FSk1DHtsPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

API doc: https://github.com/SoftwareEngineering-Course-Group/UF-OpenMart/tree/main/API%20doc

Project Board: https://github.com/SoftwareEngineering-Course-Group/UF-OpenMart/projects


<a name="UserStory"></a>

II. User Story
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

<a name="Description"></a>

III. Development Environment
----
### Backend stack:
* Framework: `Gin`
* ORM: `Gorm`
* Database:`Sqlite3`
* Authentication method: `jwt`

### Frontend stack:
* Framework: 'React'
* UI: 'semantic-UI'


<a name="Work"></a>
IV. Work Be Done
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

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6CHfpEtx-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
* More gotest for Unittest in back_end/main_test.go
* All the API tests by Postman and Curl
* read.md in 'back_end/' file shows how to run
* More screenshots for postman test result in '/backend_test'

#### Frontend accomplishment
* Add collection function
* Get items have been published and show.
* Add comment function(have not connected to backend).
* Get item randomly and show on home page.
* Details in https://youtu.be/QgN9Ggf3ZKA

<iframe width="560" height="315" src="https://www.youtube.com/embed/QgN9Ggf3ZKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

----
### Sprint4
#### Backend accomplishment
* Documenting the work done and how to run it: read.md in 'back_end/' file shows how to run
* Screenshots or video:'/backend_test'
* Adding more test cases for all the new functionality implemented in Sprint 4: More gotest for Unittest in back_end/main_test.go

#### Frontend accomplishment
* Filter of items in home page
* Category of items
* Log out button and function
* Comments function connected to back-end
* Add to favorites function
* link to poster profile page from item page
* cypress test

<a name="Test"></a>·

V. Test
----
#### Backend
> Youtube Link: https://youtu.be/Sv5UmrX0db8
#### Frontend
* Cypress test video: https://youtu.be/9FSk1DHtsPE

<a name="Use"></a>·
VI. How To Use
----
#### Backend
* read.md in 'back_end/' file shows how to run in local

#### Frontend 
* Download all in frontend folder
* Set up development environment for React
* Run npm start in the project folder and open http://localhost:3000 in the browser

# Bonus part
VPS server IP address for back-end: jsmicro.cn:12345
