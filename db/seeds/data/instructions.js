var faker = require('faker')
var knex = require('knex')

var random_instruction = {
  title: faker.name.findName(),
  content: faker.lorem.sentence(),
  img_source: faker.image.imageUrl(),
  created_at: new Date,
  stepid: Math.floor(Math.random() * (3 - 1)) + 1
}

const instructions = []

for(var i = 0; i < 10; i ++){
  instructions.push(random_instruction)
}

module.exports = { instructions }