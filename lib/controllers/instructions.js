const instructions = require('../models/instruction')

const createInstruction = (request, response, next) => {
  var instructionParams = request.body
  instructions.create(instructionParams)
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

module.exports = {
  createInstruction,
}

