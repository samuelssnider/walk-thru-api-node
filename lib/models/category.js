const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const all = () => {
  return database.raw(`SELECT categories.id, categories.title, json_agg((SELECT row_to_json(x.*)
                      FROM (SELECT walk_thrus.id, walk_thrus.title, walk_thrus.description, walk_thrus.created_at, walk_thrus.image) x))
                      AS walk_thrus
                      FROM categories
                      JOIN wt_categories 
                        ON categories.id = wt_categories.wtID
                      JOIN walk_thrus
                        ON wt_categories.categoryID = walk_thrus.id
                      GROUP BY categories.id`
                     )
}

module.exports = {
  all
}