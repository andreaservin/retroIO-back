const mongoose = require('mongoose')
const { config } = require('dotenv')

// allow .env
config()

// connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })

mongoose.connection.on('connection', (e) => {
  console.log('Database connected successfully!')
})

mongoose.connection.on('error', (e) => {
  console.log('Database error: ', e)
})

module.exports = mongoose
