const Comment = require('../models/comment')
const Ticket = require('../models/ticket')

const getAll = async () => {
  const data = await Comment.find().populate('user', 'name email')
  return data
}

const getById = async (id) => {
  const data = await Comment.findOne({ _id: id }).populate('user', 'name email')
  return data
}

const create = async (data) => {
  const { text, user, ticketId } = data
  Comment.create({ text, user })
    .then((comment) => {
      console.log('Created comment.')
      // add comment into ticket comments array
      return Ticket.findByIdAndUpdate(
        ticketId,
        { $push: { comments: comment._id } },
        { new: true, useFindAndModify: false }
      )
      //return comment
    })
    .catch((error) => {
      console.log('Error in create comment: ', error)
    })
}

module.exports = { getAll, getById, create }
