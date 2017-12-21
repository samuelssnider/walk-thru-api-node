
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE walk_thrus RESTART IDENTITY')
    .then(function () {
      // Inserts seed entries
      return knex('walk_thrus').insert([
        {
         title: 'Go Skiing', 
         description: 'Go up to the mountains and slide down a snowy hill!'
        },
        {
          title: 'Bake Cookies', 
          description: 'Mix em, Bake em, Eat em'
        },
        { 
          title: 'Beat Super Mario Level One', 
          description: "It's so hard though"
        }
      ]);
    });
};
