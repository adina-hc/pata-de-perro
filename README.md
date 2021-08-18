
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<style>
  body {
    background: linear-gradient(
    rgba(254,249,215,1) 20%,
    rgba(238,174,202,1) 50%,  
    #fef9d7 95%
  );
  overflow: hidden;
  color: #2C787E;

  }

</style>  

# Pata de Perro <img src="design/apple-touch-icon.png" width="80" height="80"> </img>

  Enjoy your vacation by booking activities online with a wide variety of services. -Pata de Perro- is a Mexican expression that means or it is referred to people who have a strong desire to leave a place and to travel, or just being out in the street.

  ## Description
  
  __AS__ a tourist, the user wants to look for a wide variety of summer activities where they:<br>
  __I WANT__ to view, select and book a variety of tourist available experiences<br>
  __SO THAT__ I can make the most of my vacation time.
  
This application includes a variety of functionality described in the Features section below.


## Table of Contents
  - [Description](#description "Description")
  - [Features](#features "Features")
  - [Installation](#installation "Installation")
  - [Mockup](#mockup "Mockup")
  - [License](#license "License")
  - [Contributors](#contributors "Contributors")
  - [Tests](#tests "Tests")
  - [Questions](#questions "Questions")
  - [Links to App](#links "Links to App")
<style>
  ol {
    color: black
    font-color: black
  }  
</style>


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

  Future features may include:
  1. Ability for the user to update their profile info and password
  2. Booking availability with dates and times
  3. Filter by location
  4. Admin sit to update activities and categories
  5. Streaming videos of activities


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
  This first animation shows the user navigating the home page, going through the About Us where developers links to their GitHub repositories are displayed.
  The user signs up and selects an activity to purchase, goes to cart and is ready to make a payment.

  ![Animation-1](./assets/pata-de-perro1.gif)

  The second animation depicts the user
  

_____

  ## Contributors to this project:

  | Contributors | GitHub Repo |
  | ------------ | ----------- |
  | Adriano Armendaris|[🏄](https://github.com/AdrianoArmen "Adriano's GitHub Repo") |
  | German Ramirez|[🐬](https://github.com/izaack89 "German's GitHub Repo") |
  | Jorge Soto|[🌴](https://github.com/jorgeatcabo "Jorge's GitHub Repo") |
  | Victor Vallejo|[🐚](https://github.com/vicvallejo "Victor's GitHub Repo") |
  | Adina Henderson|[🐠<](https://github.com/adina-hc "Adina's GitHub Repo") |



  ## Questions
  If you have any questions or would like to report any issues, please contact us at:
  
  [eMail address](adinahenderson.mail@gmail.com "email-to")  
  
______________________

  ## Links to App 
  Repo:
  [🦀](https://github.com/adina-hc/pata-de-perro "Pata de Perro GitHub")

  App:
  [Deployed App](https://shrouded-bayou-22662.herokuapp.com/ "Pata de Perro Heroku")