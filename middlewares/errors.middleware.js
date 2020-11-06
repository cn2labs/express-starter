const errorMiddleware = (error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500

  if (error.statusCode === 301) {
    return res.status(301).redirect('/api')
  }

  return res.status(error.statusCode).json({ error: error.toString() })
}

module.exports = errorMiddleware
