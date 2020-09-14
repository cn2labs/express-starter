// Load Nano ID
const { nanoid } = require('nanoid')
const makeRoyal = require('../utils/makeRoyal')

// Import util function
const royalify = require('../utils/makeRoyal')

// Example controllers
exports.createID = (req, res) => {
  const id = nanoid()
  res.status(200).json({ success: true, id: id })
}

exports.greetUser = (req, res) => {
  const name = req.params.name
  const royalGreeting = makeRoyal(name)

  res.status(200).json({ success: true, msg: royalGreeting })
}
