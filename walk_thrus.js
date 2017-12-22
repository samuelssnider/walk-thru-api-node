
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE walk_thrus RESTART IDENTITY CASCADE')
  .then(function () {
    // Inserts seed entries
    return knex('walk_thrus').insert([
    ]);
  });
};
