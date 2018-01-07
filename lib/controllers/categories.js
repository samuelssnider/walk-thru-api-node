const categories = require('../models/category')


const getCategories = (request, response, next) => {
  categories.all()
  .then(function(data) {
    if (!data.rows[0]) {
      respose.sendStatus(404)
    } else {
      response.json(data.rows)
    }
  })
}

module.exports = {
  getCategories
}