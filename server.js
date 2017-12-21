var express = require('express')
var app = express()

app.locals.title = "Walk Through API"

app.get('/', function(request, response) {
  response.send("Replace with API docs")
})

app.listen(3000, function(){
  console.log(`${app.locals.title} is running on port 3000`)
})