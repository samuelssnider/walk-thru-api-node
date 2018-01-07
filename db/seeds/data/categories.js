var knex = require('knex')

const categories =
[
  {
   title: 'Outdoors', 
   created_at: new Date,
  },
  {
    title: 'Indoors', 
    created_at: new Date,
  },
  { 
    title: 'On Your Feet', 
    created_at: new Date,
  }
]

module.exports = { categories }