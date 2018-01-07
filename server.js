const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration); 
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var walkThru = require('./lib/controllers/walk_thrus')
app.use(require('morgan')('dev'));
var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  name: 'server-session-cookie-id',
  secret: 'my express secret',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

app.use(function printSession(req, res, next) {
  console.log('req.session', req.session);
  return next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.locals.title = "Walk Through API"
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  response.send("Replace with API docs")
})

app.get('/api/v1/walk_thrus', walkThru.getWalkThrus )

app.get('/api/v1/walk_thrus/:id', walkThru.getWalkThru )

app.post('/api/v1/walk_thrus', walkThru.createWalkThru )

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;