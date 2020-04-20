const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,"../dist/todoapp/"))); //Serve static files (front end app)

app.get('/*', function(req,res) {
  res.sendFile(path.join(path.join(__dirname,"../dist/todoapp/index.html")));
});

app.listen(process.env.PORT || 8080);
