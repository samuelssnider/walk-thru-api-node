const walkThrus = require('../models/walk_thru')
var bodyParser = require('body-parser');

const getWalkThrus = (request, response, next) => {
  walkThrus.all()
  .then(function(data) {
    if (!data.rows[0]) {
      response.sendStatus(404)
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
      response.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

const createWalkThru = (request, response, next) => {
  var wtParams = request.body
  walkThrus.create(wtParams)
  .then(function(data) {
    if (!data.rows[0]) {
      response.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

const deleteWalkThru = (request, response, next) => {
  var id = request.params.id
  walkThrus.destroy(id)
    .then(function(data) {
        response.send("success\n") //send updated record back
    })
}

module.exports = {
  getWalkThrus,
  getWalkThru,
  createWalkThru,
  deleteWalkThru,
}