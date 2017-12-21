exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE instructions(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR (30) UNIQUE,
    content TEXT,
    img_source TEXT,
    created_at TIMESTAMP,
    stepID INTEGER,
    FOREIGN KEY (stepID) REFERENCES steps(id)
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE instructions`
  return knex.raw(dropQuery)
};
