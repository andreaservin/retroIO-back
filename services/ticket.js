const Ticket = require('../models/ticket')

const getAll = async () => {
  const data = await Ticket.find().populate('type comments')
  return data
}

const getById = async (id) => {
  const data = await Ticket.findOne({ _id: id })
  return data
}

const create = async (data) => {
  const ticket = new Ticket(data)
  const newTicket = await ticket.save()
  return newTicket
}

const update = async (id, data) => {
  return Ticket.updateOne({ _id: id }, data)
}

module.exports = { getAll, getById, create, update }
