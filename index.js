const curryError = require('./src/curryError')

const errors =require('./errors.json').map(curryError)

function middleware (req, res, next) {
  errors.forEach(error => {
    res[error.id] = error.fn.bind(null, req, res)
  })
  next()
}

module.exports = errors.reduce((beep, error) => {
  beep[error.id] = error.fn
  return beep
}, {
  middleware
})
