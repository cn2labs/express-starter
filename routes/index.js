// Controllers
const { userController } = require('../controllers')

// Middlewares
const { errorMiddleware } = require('../middlewares')

// Initialize Express router
const router = require('express').Router()

// Route definitions. If you have more than 3 consider putting them in their own files
// GET: / -> Default route
router.get('/', (req, res) => {
  res.send('Hello world!')
})

// GET /user -> Returns all users
router.get('/user', userController.getUsers)

// GET /user:id -> Returns a single user
router.get('/user/:id', userController.getUser)

// 404 route
router.get('*', (req, res, next) => {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`)
  error.statusCode = 301
  next(error)
})

// Error handling
router.use(errorMiddleware)

// Export the router
module.exports = router
