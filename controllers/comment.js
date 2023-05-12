const CommentService = require('../services/comment')

const getAll = async (req, res) => {
  const result = await CommentService.getAll()
  res.status(200).json(result).end()
}

const getById = async (req, res) => {
  const { id } = req.params
  const result = await CommentService.getById(id)
  res.status(200).json(result).end()
}

const create = async (req, res) => {
  const { text, user, ticketId } = req.body
  try {
    await CommentService.create({ text, user, ticketId })
    res.status(201).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

module.exports = { getAll, getById, create }
