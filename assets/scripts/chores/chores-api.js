'use strict'

const config = require('../config')
const store = require('../store')
const app = require('../app.js')

// const createChore = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/chores',
//     method: 'POST',
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getChores = function () {
  return $.ajax({
    url: app.host + '/chores', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data.chore.id,
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data.chore.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data.chore.id,
    method: 'DELETE',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Exported since used in other code like events.js
module.exports = {
  createChore,
  getChores,
  updateChore,
  deleteChore,
  getOneChore
}
