var faker = require('faker')
var knex = require('knex')

function generateRandomInstruction(i) {
  return random_instruction = {
    title: faker.name.findName(i),
    content: faker.lorem.sentence(i),
    created_at: new Date,
    stepid: (Math.floor(Math.random() * 9)) + 1
  }
}

const instructions = []

for(var i = 0; i < 40; i ++){
  instructions.push(generateRandomInstruction(i))
}

module.exports = { instructions }