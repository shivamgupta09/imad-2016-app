var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/action-one', function (req, res) {
  res.sendFile("The First request will be handeled here");
});

app.get('/actionptwo', function (req, res) {
  res.sendFile("The Second request will be handeled here");
});

app.get('/action-three', function (req, res) {
  res.sendFile("The Third request will be handeled here");
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
