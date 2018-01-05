var faker = require('faker')

const walkThrus =
[
  {
   title: 'Go Skiing', 
   description: 'Go up to the mountains and slide down a snowy hill!',
   created_at: new Date,
   image: faker.image.imageUrl(400,400,"nightlife", "ski"),
  },
  {
    title: 'Bake Cookies', 
    description: 'Mix em, Bake em, Eat em',
    created_at: new Date,
    image: faker.image.imageUrl(400,400,"nightlife", "food")
  },
  { 
    title: 'Beat Super Mario Level One', 
    description: "It's so hard though",
    created_at: new Date,
    image: faker.image.imageUrl(400,400,"nightlife", "video games"),
  }
]

module.exports = { walkThrus }