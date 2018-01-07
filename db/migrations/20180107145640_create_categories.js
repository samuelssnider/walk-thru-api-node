exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE categories(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR (30),
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE categories`
  return knex.raw(dropQuery)
};
