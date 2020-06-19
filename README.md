# Fire Hydrant 
### Employee Social Network 

![HeroImage](./wireframes/hero-image-readme.jpg)

<br>

## Overview

_Fire Hydrant is an internal organization web app that’s a hybrid between an employee directory and social network!_

##### Demo
- Live Version: http://fire-hydrant.surge.sh
- Backend Git repo: https://github.com/SArliss/fire-hydrant-backend
- Backend deployed: https://guarded-sea-27397.herokuapp.com

### Design and Development

Designed by Simone Tobias and 
Michael LoPreto. Developed by Jeremy Taubman and Sinara Arliss.

### The Problem

It's difficult to stay connected with employees, on a personal and professional level, across a large organization with the majority of them working remote.

<br>

## MVP

_The minimum requirement for the fyre hydrant web app is to provide an online portal where users can login/signup for an account and fill their profile info with name, email, password, position, location and fun facts fields. All users can view, create, edit and delete posts about the projects they are working on or something else they want to share with their peers. Also, all users should get the ability to comment on posts._

- Use at least 1 API to call and display information.

<br>

### MVP Goals
- _Users can signin and signup in a safe enviroment (JWT authentication)_
- _Users must be logged in to have access to all the content in the DB (viewing permission)_
- _Users should have the ability to create, read, update and delete their posts_
- _Users should be able to leave comments in posts._

<br>

### MVP Libraries

|     Library      | Description                                                                       |
| :--------------: | :-------------------------------------------------------------------------------- |
|      React       | _Front end - renders HTML, CSS, adds functionality to the site and accesses the database._      |
|   React Router   | _Allows user to navigate through the website - auto directs when user is not logged in._ |
|  Ruby on Rails   | _Backend - database and auth (login/password - JWT)._                                                    |
| Ruby Controllers | _Create full CRUD endpoints (RESTful API)._                                       |

<br>

### MVP Client (Front End)

#### Wireframes

- https://www.figma.com/file/zzeM74NSoNjkoY9S6a9LkP/FIREHYDRANT

#### Component Hierarchy

```structure

src
|__ images/
|__ components/
      |__ Announcements.js
      |__ Feedform.js
      |__ Login.js
      |__ Pack.js
      |__ Register.js
      |__ UserLoggedOut.js
      |__ UserPage.js
      |__ UserProfile.js
|__ services/
      |__ Api-helper.js

```

<br>

### MVP Server (Back-End)

#### ERD Model

![ERD](./wireframes/erd.png)

#### Data Heirarchy

```structure

database_db
|__ users/
|__ posts/
|__ comments/

```

<br>

## Goals & Challenges

The goal is to have a 100% functioning full stack app that shows both our technical skills as a good eye for creativity and responsive design.

Challenge: Design the database model, identify interrelationships. 

## Post-MVP - Stretch Goals

- Add members to your pack
- Likes and comments on posts
- _Ability to change user settings and credentials - position, location, fun facts._
- _Like and comment on posts._
- _Password reset functionality_
  <br>
- _Followers_
  <br>
- _Upload image instead of image url_
  - Profile picture
  - Post image
  <br>
- _Chat Functionality_
  - Real time message to another users
  <br>
- _Google maps integration with location_

## Technology / Resources used

_Preparation_

- Figma
- VS Code
- Github
- Draw.io

_Backend_

- Ruby on Rails
- RESTful Api
- Postgres
- Heroku (deployment)

_Frontend_

- React
- React Router
- Axios
- Node.js
- Google Fonts
- Surge (deployment)

---

## Backend Git Repo
https://github.com/SArliss/fire-hydrant-backend

## Project Delivery

MPV: May 21, 2020.
Final presentation: May 22, 2020.


---
