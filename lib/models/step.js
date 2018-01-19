const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const all = () => {
  return database.raw(`SELECT steps.id, steps.title, steps.description, steps.img_source, steps.created_at, json_agg((SELECT row_to_json(x.*)
                       FROM (SELECT instructions.id, instructions.title, instructions.content, instructions.created_at, instructions.stepID) x))
                       AS instructions
                       FROM steps
                       LEFT OUTER JOIN instructions
                        ON steps.id = instructions.stepID
                      GROUP BY steps.id `)
}

const one = (id) => {
  return database.raw(`SELECT steps.id, steps.title, steps.description, steps.img_source, steps.created_at, json_agg((SELECT row_to_json(x.*)
                       FROM (SELECT instructions.id, instructions.title, instructions.content, instructions.created_at, instructions.stepID) x))
                       AS instructions
                       FROM steps
                       LEFT OUTER JOIN instructions
                        ON steps.id = instructions.stepID
                      WHERE steps.id = ${id}
                      GROUP BY steps.id `)
}

const create = (stepParams) => {
  
  return database.raw(`INSERT INTO steps (walk_thruID, title, description, img_source, created_at)
                       VALUES (?, ?, ?, ?, ?) 
                       RETURNING id, title, description`, [stepParams['walk_thruID'], stepParams['title'], stepParams['description'] ,stepParams['image'], new Date]
                     )
}

const destroyWTS = (id) => {
  return database.raw(`DELETE from steps
                       WHERE steps.walk_thruID IN
                        (SELECT id
                         FROM walk_thrus
                         WHERE id = ${id})`
                      )
}

module.exports = {
  all,
  one,
  create,
  destroyWTS,
}