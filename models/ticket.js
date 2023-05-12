const mongoose = require('../database')

// define a schema
const schema = mongoose.Schema(
  {
    description: String,
    type: { type: mongoose.Types.ObjectId, ref: 'Type', required: true },
    likes: { type: Number, default: 0 },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
)

// define model
const Ticket = mongoose.model('Ticket', schema)

module.exports = Ticket
