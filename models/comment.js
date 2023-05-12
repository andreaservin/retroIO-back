const mongoose = require('../database')

// define a schema
const schema = mongoose.Schema(
  {
    text: String,
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
)

// define model
const Comment = mongoose.model('Comment', schema)

module.exports = Comment
