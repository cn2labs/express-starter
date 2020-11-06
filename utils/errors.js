class BadRequestError extends Error {
  constructor(message) {
    super(message)

    this.statusCode = 400
    this.name = 'BadRequestError'
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message)

    this.statusCode = 401
    this.name = 'UnauthorizedError'
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message)

    this.statusCode = 404
    this.name = 'NotFoundError'
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
}
