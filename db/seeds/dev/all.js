const walkThrus     = require('../data/walk_thrus')
const steps         = require('../data/steps')
const instructions  = require('../data/instructions')
const users         = require('../data/users')
const categories    = require('../data/categories')
const wt_categories = require('../data/wt_categories')

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE instructions RESTART IDENTITY CASCADE')
  .then(function () {
    return knex.raw('TRUNCATE steps RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex.raw('TRUNCATE walk_thrus RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex.raw('TRUNCATE categories RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex.raw('TRUNCATE wt_categories RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex('walk_thrus').insert(walkThrus['walkThrus']);
  })
  .then(function () {
    return knex('steps').insert(steps['steps']);
  })
  .then(function () {
    return knex('instructions').insert(instructions['instructions']);
  })
  .then(function () {
    return knex('users').insert(users['users']);
  })
  .then(function () {
    return knex('categories').insert(categories['categories']);
  })
  .then(function () {
    return knex('wt_categories').insert(wt_categories['wt_categories']);
  })
};