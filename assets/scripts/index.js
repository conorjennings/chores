'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/auth-events.js')
const choreEvents = require('./chores/chores-events.js')

$(() => {
  setAPIOrigin(location, config)
  $('.sign-in-section').hide()
  $('.sign-up-section').hide()
  $('.change-password-section').hide()
  $('.chores-section').hide()

  $('.alert').hide()

  $('.chore-add-menu').hide()
  $('.chore-clear-menu').hide()
  $('.change-password-menu').hide()
  $('.sign-out-menu').hide()
  $('.chore-menu').hide()
  $('.chore-get-menu').hide()
  $('.chore-get-one-menu').hide()
  $('.chore-update-menu').hide()
  $('.chore-delete-menu').hide()

  $('.add-chore-section').hide()
  $('.update-chore-section').hide()
  $('.delete-chore-section').hide()
  $('.get-chores-section').hide()
  $('.get-one-chore-section').hide()
  $('.home-menu').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(() => {
  authEvents.addHandlers()
  choreEvents.addHandlers()
})
