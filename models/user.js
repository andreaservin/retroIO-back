const mongoose = require('../database')

// define a schema
const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

// define model
const User = mongoose.model('User', schema)

module.exports = User
