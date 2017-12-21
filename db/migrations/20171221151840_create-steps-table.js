exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE steps(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR (30),
    description TEXT,
    created_at TIMESTAMP,
    walk_thruID INTEGER,
    FOREIGN KEY (walk_thruID) REFERENCES walk_thrus(id)
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE steps`
  return knex.raw(dropQuery)
};
