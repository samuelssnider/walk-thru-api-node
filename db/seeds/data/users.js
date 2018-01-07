var faker = require('faker')
const users = [{
  username: "sam",
  password: "sam",
  created_at: new Date
}]

function createRandomUser(i) {
  return randomUser = {
    username: faker.internet.userName(i),
    password: faker.internet.userName(i),
    created_at: new Date
  }
}

for(var i = 0; i < 10; i ++){
  users.push(createRandomUser(i))
}

module.exports = { users }