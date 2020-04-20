<h1 align="center">
To-do app
</h1>

<p align="center">Angular 9- Firebase Auth - Material UI - Express - Json-server<p>

### Small to-do app with authorization via Firebase Auth

![Heroku](https://heroku-badge.herokuapp.com/?app=todos-angular)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

> You need to have Node installed to run the project locally

### Server Installation and running (Json-server)
Install dependencies
```sh
$ cd json-server
$ npm install
```

To start the server run: 
```sh
$ npm start
```
Json-server : http://localhost:3000/todos

### Client (front-end) Installation and running

Install dependencies
```sh
$ npm install
```
To start the app run
```sh
$ npm start
```
Angular todo-app : http://localhost:4200

### Firebase Auth initialization
Create a new project on Firebase and add Google auth.
Replace firebase config variables on enviroment.ts file with your own.


## Test the app

You can preview the app on heroku: 

[todos-angular](https://todos-angular.herokuapp.com/)


## Application Screenshots
 
Desktop

![Desktop main](https://user-images.githubusercontent.com/3619970/79741830-928f5500-830a-11ea-8d27-ab1a7121e0f9.PNG)

![Desktop sign-in](https://user-images.githubusercontent.com/3619970/79741833-928f5500-830a-11ea-8bd2-94783b2049c1.PNG)

Mobile

![mobile-sign-in](https://user-images.githubusercontent.com/3619970/79741825-8efbce00-830a-11ea-93eb-429b2155c83a.png)

![mobile-main](https://user-images.githubusercontent.com/3619970/79741828-90c59180-830a-11ea-93c1-11c921ad6aac.png)
