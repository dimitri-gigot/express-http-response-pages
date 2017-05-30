const makeHtml = require('./makeHtml')

module.exports = function curryError (error) {
  const {code, name} = error
  error.fn = function (req, res) {
    res.status(code).end(makeHtml(code, name))
  }
  return error
}
