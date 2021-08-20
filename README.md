
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Pata de Perro <img src="design/apple-touch-icon.png" width="80" height="80"> </img>

  Enjoy your vacation by booking activities online with a wide variety of services. <b><i>Pata de Perro</i></b> is a Mexican expression that means or it is referred to people who have a strong desire to leave a place and to travel, or just being out in the street.

  ## Description
  
  __AS__ a tourist, the user wants to look for a wide variety of summer activities where they:<br>
  __CAN__ view, select and book a variety of tourist available experiences<br>
  __SO THAT__ they can make the most of their vacation time.
  
This application includes a variety of functionality described in the Features section below.


## Table of Contents
  - [Description](#description "Description")
  - [Features](#features "Features")
  - [Technologies](#technologies "Technologies")
  - [Installation](#installation "Installation")
  - [Mockup](#mockup "Mockup")
  - [License](#license "License")
  - [Contributors](#contributors "Contributors")
  - [Tests](#tests "Tests")
  - [Questions](#questions "Questions")
  - [Links to App](#links "Links to App")


____________________

  ## Features

  Current features include:

  - Navigator
    - Home will take the user to About Us
    - Login for users to enter the page or  Signup if visiting for the first time
    - Activities display for the user to pick and book
    - Cart for the user to see their selected activies to be paid
    - Profile for the user to update their information (future feature)
    - Logout to leave the session


  - Home or landing page: on-click of the paw, the user is taken to the `About Us` page
  
  - When the user clicks on Activities, images with descriptions appear for the user to pick, but they must log in to purchase 

  - Login/Signup -> existing users can:
      - view the `Order History`
      - update their profile information (future feature)
      - pick, book and pay
      - access the full functionality of the website  

  - Cart: when the user picks and activity to book it, they can see their selected items in the cart

  __Future features__ may include:
  1. Ability for the user to update their profile info and password
  2. Booking availability with dates and times
  3. Filter by location
  4. Admin sit to update activities and categories
  5. Streaming videos of activities

_______

 ## Technologies
  
  | Back-end | |Front-end |
  | -------- |--- |--------- |
  | MERN | | CSS |
  | GraphQL | | Styled-components |
  | JWT | | Font awesome |
  | Stripe | |  
   
> Also included are the service worker and the manifest.   

_______

  ### Installation

  You can install this application by running it on the command line


```
npm install
npm run seed
npm run develop
```
_____

  ## Tests

  We included some reducers testing on functionality for this project.

  ```
  cd client
  npm run test

  ```

____

  ## Mockup images

  Functionality is shown below:   
  
  ![Desktop & Mobile](./assets/PdPmockup1.jpg)
  ![Multiple Devices](./assets/PdPmockup2.jpg)

  ## Animation
  1. The first animation depicts an existing user loggin into the website, navigating through the `Activities` section, selecting and activity and proceeding to checkout in the `Cart` and submitting payment. Then being redirected back to the page and looking at their `Order History`.   

![First Animation Existing User](./assets/pata-de-perro1.gif)  

  2. The second animation depicts the user browsing to `About Us` section in the navbar, where when redirected, the user can click on the developers buttons, which will open in a different browser page (depicted on the fourth animation). The user then navigates to the `Contact Us` page, sending a message. Also, browsing to `User Profile` where in __future__ __features__ the user will be able to update their information and password.

![Second Animation Existing User](./assets/pata-de-perro2.gif) 

  3. Third animation: shows the new user functionality to sign up by creating their account. New users will then have the same access capability as the one depicted in the second animation.

![Third Animation New User](./assets/pata-de-perro3.gif)   

  The user can also select activities that will save in their carts while they are off-line

  The fourth animation depicts the user browsing through the `About Us` development team, being able to click on each developer to be redirected the their respective GitHub Repositories.
  Also, it shows the app manifest and service workers.
  
  The user can select and activity while being off-line and being stored in their cart and visible when they go  on-line.   

![Fourth Animation](./assets/pata-de-perro4.gif)
_____

  ## Contributors to this project:

  | Contributors | GitHub Repo |
  | ------------ | :-----------: |
  | Adina Henderson| [🐠<](https://github.com/adina-hc "Adina's GitHub Repo") |
  | Adriano Armendaris|[🏄](https://github.com/AdrianoArmen "Adriano's GitHub Repo") |
  | German Ramirez|[🐬](https://github.com/izaack89 "German's GitHub Repo") |
  | Jorge Soto|[🌴](https://github.com/jorgeatcabo "Jorge's GitHub Repo") |
  | Victor Vallejo|[🐚](https://github.com/vicvallejo "Victor's GitHub Repo") |

___________

  ## Questions
  If you have any questions or would like to report any issues, please contact us at:
  
  [eMail address](adinahenderson.mail@gmail.com "email-to")  
  
______________________

  ## Links to App 
  Repo:
  [🦀](https://github.com/adina-hc/pata-de-perro "Pata de Perro GitHub")

  App:
  [Deployed App](https://shrouded-bayou-22662.herokuapp.com/ "Pata de Perro Heroku")