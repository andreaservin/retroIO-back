const mongoose = require('../database')

// define a schema
const schema = mongoose.Schema({
  name: String,
})

// define model
const Type = mongoose.model('Type', schema)

module.exports = Type
