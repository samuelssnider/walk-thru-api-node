const steps = 
[
  {
    walk_thruid: 1,
    title: 'Get Equipment', 
    description: 'Go buy it!',
    created_at: new Date,
    img_source: faker.image.imageUrl(25)
  },
  {
    walk_thruid: 1,
    title: 'Buy a pass', 
    description: 'Go buy that too!',
    created_at: new Date,
    img_source: faker.image.imageUrl(26)
    
  },
  {
    walk_thruid: 1,
    title: 'Hit the slopes', 
    description: "You know you want to!",
    created_at: new Date,
    img_source: faker.image.imageUrl(27)
    
  },
  {
    walk_thruid: 2,
    title: 'Pour and mix it', 
    description: 'Go mix it!',
    created_at: new Date,
    img_source: faker.image.imageUrl(28)
    
  },
  {
    walk_thruid: 2,
    title: 'Break and bake', 
    description: 'Go bake it!',
    created_at: new Date,
    img_source: faker.image.imageUrl(29)
  },
  {
    walk_thruid: 2,
    title: 'Stir it Up', 
    description: "You know you want to!",
    created_at: new Date,
    img_source: faker.image.imageUrl(30)
  },
  {
    walk_thruid: 3,
    title: 'Buy the game', 
    description: 'Purchase!',
    created_at: new Date
    img_source: faker.image.imageUrl(31)
  },
  {
    walk_thruid: 3,
    title: 'Set it up', 
    description: 'Get it going!',
    created_at: new Date,
    img_source: faker.image.imageUrl(32)
  },
  {
    walk_thruid: 3,
    title: 'Play the level', 
    description: "You know you want to!",
    created_at: new Date,
    img_source: faker.image.imageUrl(33)
  }
]

module.exports = { steps }