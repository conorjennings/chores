'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/auth-events.js')
const choreEvents = require('./chores/chores-events.js')

$(() => {
  setAPIOrigin(location, config)
  $('.alert').hide()
  $('.change-password-menu').hide()
  $('.chore-menu').hide()
  $('.sign-up-section').hide()
  $('.sign-in-section').hide()
  $('.change-password-section').hide()
  $('.chores-section').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(() => {
  authEvents.addHandlers()
  choreEvents.addHandlers()
})
