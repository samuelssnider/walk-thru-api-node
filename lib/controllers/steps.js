const steps = require('../models/step')

const getStep = (request, response, next) => {
  var stepPararms = request.body
  steps.all
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

module.exports = {
  getStep,
}