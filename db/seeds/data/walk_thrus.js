var faker = require('faker')

const walkThrus =
[
  {
   title: 'Go Skiing', 
   description: 'Go up to the mountains and slide down a snowy hill!',
   created_at: new Date,
   image: 'https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2017/10/Dolomiti.jpg',
  },
  {
    title: 'Bake Cookies', 
    description: 'Mix em, Bake em, Eat em',
    created_at: new Date,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/1200px-2ChocolateChipCookies.jpg'
  },
  { 
    title: 'Beat Super Mario Level One', 
    description: "It's so hard though",
    created_at: new Date,
    image: 'https://i.ytimg.com/vi/-avspZlbOWU/maxresdefault.jpg'
  }
]

module.exports = { walkThrus }