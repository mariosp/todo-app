const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const app = express();

app.use(middlewares);
app.use(router);

app.use(express.static(path.join(__dirname,"../dist/todoapp/"))); //Serve static files (front end app)

app.get('/*', function(req,res) {
  res.sendFile(path.join(path.join(__dirname,"../dist/todoapp/index.html")));
});

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 8080);
