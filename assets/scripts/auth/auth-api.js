'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',  // do not call this REQUEST here
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',  // do not call this REQUEST here
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // contentType: 'application/json'
    },
    data: data
  })
}

// Exported since used in other code like events.js
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
