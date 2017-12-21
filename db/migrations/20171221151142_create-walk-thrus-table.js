exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE walk_thrus(
    id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    description TEXT,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE secrets`
  return knex.raw(dropQuery)
}