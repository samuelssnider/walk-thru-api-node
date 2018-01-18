const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var bodyParser = require('body-parser');
var express = require('express');
var bookshelf = require('bookshelf')(database);
var cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);

var instructions = bookshelf.Model.extend({
  tableName: 'instructions'
});

var steps = bookshelf.Model.extend(
  {
    tableName: 'steps',
    instructions: function() {
      return this.hasMany(instructions)
    }
  },
  {
    dependents: ['instructions']
  }
);

var walkThrus = bookshelf.Model.extend(
  {
    tableName: 'walk_thrus',
    posts: function() {
      return this.hasMany(steps);
    }
  },
  {
  dependents: ['steps']
  }
);

const all = () => {
  return database.raw(`SELECT walk_thrus.id, walk_thrus.title, walk_thrus.description, walk_thrus.created_at, walk_thrus.image, json_agg((SELECT row_to_json(x.*)
                      FROM (SELECT steps.id, steps.title, steps.description, steps.img_source, steps.created_at) x))
                      AS steps
                      FROM walk_thrus
                      JOIN steps 
                        ON walk_thrus.id = steps.walk_thruid
                      GROUP BY walk_thrus.id`
                     )
}

const one = (id) => {
  return database.raw(`SELECT walk_thrus.id, walk_thrus.title, walk_thrus.description, walk_thrus.created_at, walk_thrus.image, json_agg((SELECT row_to_json(x.*)
                      FROM (SELECT steps.id, steps.title, steps.description, steps.img_source, steps.created_at) x))
                      AS steps
                      FROM walk_thrus
                      JOIN steps 
                        ON walk_thrus.id= steps.walk_thruid
                      WHERE walk_thrus.id = ${id}
                      GROUP BY walk_thrus.id`
                     )
}

const create = (wtParams) => {
  return database.raw(`INSERT INTO walk_thrus (title, description, image, created_at)
                       VALUES (?, ?, ?, ?) 
                       RETURNING id, title, description`, [wtParams['title'], wtParams['description'] ,wtParams['image'], new Date]
                     )
}

const destroy = (inID) => {
  return walkThrus.forge({id: inID}).destroy()
}



module.exports = {
  all,
  one,
  create,
  destroy,
}