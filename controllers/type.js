const TypesService = require('../services/type')

const getAll = async (req, res) => {
  const result = await TypesService.getAll() 
  res.status(200).json(result).end()
}

const create = async (req, res) => {
  const { name } = req.body
  try {
    await TypesService.create({ name })
    res.status(201).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

module.exports = { getAll, create }
