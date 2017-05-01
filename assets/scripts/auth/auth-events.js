'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./auth-api')
const ui = require('./auth-ui')
let origPass // Had to init this global for some reason?

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#sign-up-error-message').html('Passwords do not match. Please try again')
    $('.alert-danger').show()
  } else {
    api.signUp(data)
    .then(function (data) {
      ui.signUpSuccess(data)
      $('#sign-up')[0].reset() // clear out form after successfully signing up
    })
    .catch(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  origPass = data.credentials.password
  api.signIn(data)
  .then(function (data) {
    ui.signInSuccess(data)
    $('#sign-in')[0].reset() // clear out form after successfully signing in
  })
  .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  if (origPass !== data.passwords.old || data.passwords.new !== data.passwords.confirm) {
    $('#change-password-error-message').html('Either your current password was typed incorrectly or your new passwords do not match. Please try again')
    $('.alert-danger').show()
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
    $('#change-password')[0].reset() // clear out form after successfully changing password
  }
}

// Hide any error bootstrap alert box if user hits cancel.
const onClearErrorAlertBox = function () {
  // event.preventDefault()  This cost me 2 annoying hours. Wouldn't allow me clear form as well as hide error message. Turned off. then worked!
  $('.alert').hide()
  $('.alert-danger').hide()
}

// Genereic function to clear out input form fields when necessary
const onClearFormInput = function (formName) {
  $(formName)[0].reset()
}

const changePasswordShowHideObjects = function () {
  $('.nav').show()
  $('.alert').hide()
  $('.authentication').hide()
}

// const showObjects = function () {
//   const xyz = $('.sign-in-section')
//   xyz.show()
//   // $('.sign-in-section').show()
// }

// DRY: Pass in any class or DIV name to this function to show it one the page:
const showObjects = function (sectionName) {
  $(sectionName).show()
}

const hideObjects = function (sectionName) {
  $(sectionName).hide()
}

const addHandlers = () => {
  $('.change-password-menu').on('click', changePasswordShowHideObjects)
  $('#change-password').on('submit', onChangePassword)
  $('#change-password').on('reset', onClearFormInput('#change-password'), onClearErrorAlertBox)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('reset', onClearFormInput('#sign-up'), onClearErrorAlertBox)
  $('.sign-in-menu').on('click', function () { showObjects('.sign-in-section') })
  $('#sign-in').on('submit', onSignIn)
  // Hitting cancel on sign in button invokes 3 handler methods to clear contents of text and password box, clear out any error alerts and then hide the entire sign in form
  $('#sign-in').on('reset', onClearFormInput('#sign-in'), function () { hideObjects('.sign-in-section') })
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
