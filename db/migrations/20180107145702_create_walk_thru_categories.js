exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE wt_categories(
    id SERIAL PRIMARY KEY NOT NULL,
    wtID INTEGER,
    categoryID INTEGER,
    FOREIGN KEY (wtID) REFERENCES walk_thrus(id),
    FOREIGN KEY (categoryID) REFERENCES categories(id)
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE wt_categories`
  return knex.raw(dropQuery)
};
