const UserService = require('../services/user')

const getAll = async (req, res) => {
  const result = await UserService.getAll()
  res.status(200).json(result).end()
}

const getById = async (req, res) => {
  const { id } = req.params
  const result = await UserService.getById(id)
  res.status(200).json(result).end()
}

const create = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const data = await UserService.create({ name, email, password })
    data && res.status(201).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserService.authenticate(email, password)
    res.status(200).json(user).end()
  } catch (error) {
    res.status(500).json(error?.message).end()
  }
}

module.exports = { getAll, getById, create, login }
