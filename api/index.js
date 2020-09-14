// Import controllers
const { createID, greetUser } = require('../db/example.controller')

// Initialize Express router
const router = require('express').Router()

// Route definitions, if you have more than 3 consider putting them in their own files
// GET: / -> Default route
router.get('/', (req, res) => {
  res.send('hello world!')
})

// GET: /id -> Create a new ID
router.get('/id', createID)

// GET /greet/:name -> Greet a user based on it's param (EXAMPLE)
router.get('/users/:name', greetUser)

// Export the router
module.exports = router
