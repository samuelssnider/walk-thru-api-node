const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const create = (instructionParams) => {
  return database.raw(`INSERT INTO instructions (title, content, stepID, created_at)
                       VALUES (?, ?, ?, ?)
                       RETURNING id, title, stepID`, [instructionParams['title'], instructionParams['content'], instructionParams['stepID'], new Date]
                     )
}

const destroyWTI = (id) => {
  return database.raw(`DELETE from instructions
                       WHERE instructions.stepID IN
                        (SELECT id 
                         FROM steps
                         WHERE steps.walk_thruID = ${id})`
                    )
}

module.exports = {
  create,
  destroyWTI,
}