const Type = require('../models/type')

const getAll = async () => {
  const data = await Type.find()
  return data
}

const getById = async (id) => {
  const data = await Type.findOne({ _id: id })
  return data
}

const create = async (data) => {
  const type = new Type(data)
  const newType = await type.save()
  return newType
}

module.exports = { getAll, getById, create }
