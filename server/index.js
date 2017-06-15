const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');

//serve up static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', function (req, res) {
  console.log("got it");
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server started");
});
