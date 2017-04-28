'use strict'

const app = require('../app.js')

const getChores = function () {
  return $.ajax({
    url: app.host + '/chores', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

module.exports = {
  getChores
}
