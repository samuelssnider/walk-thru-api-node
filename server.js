const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration); 
var express = require('express')
var app = express()
var bodyParser = require('body-parser');


app.locals.title = "Walk Through API"
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  response.send("Replace with API docs")
})


if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;