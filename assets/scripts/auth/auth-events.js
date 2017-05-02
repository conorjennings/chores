'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./auth-api')
const ui = require('./auth-ui')
let origPass // Had to init this global for some reason?

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('.sign-up-error-alert').html('Passwords don\'t match. Please try again')
    $('.sign-up-error-alert').show()
    // This clears out the bootstrap alert box after a few seconds:
    // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
    setTimeout(function () {
      $('.sign-up-error-alert').alert('close')
    }, 3000)
  } else {
    api.signUp(data)
    .then(function (data) {
      ui.signUpSuccess(data)
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
    $('#change-password-error-message').html('Either your current password is incorrect or your new passwords don\'t match.')
    $('.alert-danger').show()
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
    // $('#change-password')[0].reset() // clear out form after successfully changing password
  }
}

// Hide any error bootstrap alert box if user hits cancel.
const onClearErrorAlertBox = function () {
  // event.preventDefault()  This cost me 2 annoying hours. Wouldn't allow me clear form as well as hide error message. Turned off. then worked!
  // $('.alert').hide()
  $('.alert-danger').hide()
}

// Hide any error bootstrap alert box if user hits cancel.
const onClearSuccessAlertBox = function () {
  // event.preventDefault()  This cost me 2 annoying hours. Wouldn't allow me clear form as well as hide error message. Turned off. then worked!
  // $('.alert').hide()
  $('.alert-success').hide()
}

// Genereic function to clear out input form fields when necessary
const onClearFormInput = function (formName) {
  $(formName)[0].reset()
}

const onShowSignIn = function () {
  $('.sign-in-section').show()
}

const onHideSignIn = function () {
  $('.sign-in-section').hide()
}

const onShowSignUp = function () {
  $('.sign-up-section').show()
}

const onHideSignUp = function () {
  $('.sign-up-section').hide()
}

const onShowChangePassword = function () {
  $('.change-password-section').show()
}

const onHideChangePassword = function () {
  $('.change-password-section').hide()
}

// https://codepen.io/CSWApps/pen/XJoLmN
// window.setTimeout(function () {
//   $('.alert').fadeTo(500, 0).slideUp(500, function () {
//     $(this).remove()
//   })
// }, 4000)

const addHandlers = () => {
  $('.change-password-menu').on('click', onShowChangePassword)
  $('#change-password').on('submit', onChangePassword)
  $('#change-password').on('reset', onHideChangePassword)
  // $('#change-password').on('reset', onClearFormInput('#change-password'), function () { hideObjects('.change-password-section') })

  $('.sign-up-menu').on('click', onShowSignUp)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('reset', onHideSignUp)

  $('.sign-in-menu').on('click', onShowSignIn)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-in').on('reset', onHideSignIn)
  // $('#sign-in').on('reset', onClearFormInput('#sign-in'), function () { hideObjects('.sign-up-section') }, function () { hideObjects('.sign-in-section') })

  $('.sign-out-menu').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
