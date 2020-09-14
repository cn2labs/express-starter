// Setup ENV variables
require('dotenv').config()

// Setup the server
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

// Set port, fallback to 3000 if not defined in .env
const PORT = process.env.PORT || 3000

// Setup HTTP logging with Morgan
app.use(morgan('tiny'))

// Enable CORS (change to whitelist before production)
app.use(cors())

// Enable JSON and URL encoded body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Setup routes to be accessible at /api
const routes = require('./api')
app.use('/api/', routes)

// Start the server
app.listen(PORT, () => {
  if (process.env.ENVIRONMENT === 'dev') {
    console.log(`Server started on http://localhost:${PORT}/api/`)
  } else {
    console.log(`Server started on port ${PORT}`)
  }
})
