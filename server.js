// server.js
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// add public folder
app.use(express.static(__dirname + '/public'));

// get index
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.listen(8000, function() {
  console.log('port 8k is lit fam...');
});
