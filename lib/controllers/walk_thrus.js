const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const walkThrus = require('../models/walk_thru')

const getWalkThrus = (request, response, next) => {
  walkThrus.all()
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

const getWalkThru = (request, response, next) => {
  var id = request.params.id
  walkThrus.one(id)
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

module.exports = {
  getWalkThrus,
  getWalkThru,
}