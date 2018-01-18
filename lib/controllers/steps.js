const steps = require('../models/step')

const getStep = (request, response, next) => {
  var id = request.params.id
  steps.one(id)
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

const createStep = (request, response, next) => {
  var stepParams = request.body
  steps.create(stepParams)
  .then(function(data) {
    if (!data.rows[0]) {
      response.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

module.exports = {
  getStep,
  createStep,
}