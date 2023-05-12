const TicketService = require('../services/ticket')

const getAll = async (req, res) => {
  const result = await TicketService.getAll()
  res.status(200).json(result).end()
}

const getById = async (req, res) => {
  const { id } = req.params
  const result = await TicketService.getById(id)
  res.status(200).json(result).end()
}

const create = async (req, res) => {
  const { description, type, likes } = req.body
  try {
    const data = await TicketService.create({ description, type, likes })
    data && res.status(201).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

const update = async (req, res) => {
  const id = req.params.id
  const { description, type, likes } = req.body
  try {
    const data = await TicketService.update(id, { description, type, likes })
    res.status(200).json(data).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

module.exports = { getAll, getById, create, update }
