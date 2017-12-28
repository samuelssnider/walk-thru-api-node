
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const all = () => {
  return database.raw(`SELECT walk_thrus.id, walk_thrus.title, walk_thrus.description, walk_thrus.created_at, json_agg((SELECT row_to_json(x.*)
                      FROM (SELECT steps.id, steps.title, steps.description, steps.created_at) x))
                      AS steps
                      FROM walk_thrus
                      JOIN steps 
                        ON walk_thrus.id= steps.walk_thruid
                      GROUP BY walk_thrus.id`
                     )
}

module.exports = {
  all,
}