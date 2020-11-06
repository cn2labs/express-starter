// Dependencies
const { nanoid } = require('nanoid')

// Custom errors
const { BadRequestError } = require('../utils/errors')

// Fake API
const idOne = nanoid()
const idTwo = nanoid()

let users = {
  [idOne]: {
    id: idOne,
    firstName: 'Peter',
    lastName: 'Parker',
  },
  [idTwo]: {
    id: idTwo,
    firstName: 'Miles',
    lastName: 'Morales',
  },
}

exports.getUsers = async (req, res, next) => {
  res.status(200).json({ users: Object.values(users) })
}

exports.getUser = async (req, res, next) => {
  const id = req.params.id
  const user = users[id]

  if (!user) {
    return next(new BadRequestError('No user with that ID'))
  }

  res.status(200).json({ user: user })
}
