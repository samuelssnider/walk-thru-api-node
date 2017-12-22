
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE walk_thrus RESTART IDENTITY CASCADE')
  .then(function () {
    // Inserts seed entries
    return knex('walk_thrus').insert([
      {
       title: 'Go Skiing', 
       description: 'Go up to the mountains and slide down a snowy hill!',
       created_at: new Date
      },
      {
        title: 'Bake Cookies', 
        description: 'Mix em, Bake em, Eat em',
        created_at: new Date
      },
      { 
        title: 'Beat Super Mario Level One', 
        description: "It's so hard though",
        created_at: new Date
      }
    ]);
  });
};
