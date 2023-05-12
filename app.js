const express = require('express')
const cors = require('cors')
const { config } = require('dotenv')
const TypeRoutes = require('./routes/type')
const CommentRoutes = require('./routes/comment')
const UserRoutes = require('./routes/user')
const TicketRoutes = require('./routes/ticket')

// allow .env
config()

const app = express()

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// routes
app.use((req, res, next) => {
  console.log('\n----------------------------------')
  console.log('URL ', req.url)
  console.log('PARAMS', req.params)
  console.log('BODY ', req.body)
  next()
})

app.get('/', (req, res) => {
  res.send('RetroIO API!')
})

app.use('/api/types', TypeRoutes)
app.use('/api/comments', CommentRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/tickets', TicketRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`)
})
