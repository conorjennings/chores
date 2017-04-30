'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./auth-api')
const ui = require('./auth-ui')
let origPass // Had to init this global for some reason?

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
  .then(function (data) {
    ui.signUpSuccess(data)
    // $('#modalRegister').modal('hide')
  })
  .catch(ui.signUpFailure)
  // Clear out existing text in modal text boxes when there is a failure
  // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  $('#modalRegister').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  origPass = data.credentials.password
  api.signIn(data)
  .then(function (data) {
    ui.signInSuccess(data)
    $('#modalSignIn').modal('hide')
  })
  .catch(ui.signInFailure)
  // Clear out existing text in modal text boxes when there is a failure
  // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  $('#modalSignIn').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
}

// const onSignOut = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signOut(data)
//   .then(ui.signOutSuccess)
//   .catch(ui.signOutFailure)
//   $('#modalSignOut').modal('hide')
// }

const onSignOut = function (event) {
  console.log (">> onSignOut with event  = ", event)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // if (origPass !== data.passwords.old || data.passwords.confirm !== data.passwords.new) {
  //   $('#changePasswordErrorAlertMessage').html('Incorrect Password Change')
  //   ui.changePasswordFailure
  //   // Clear out existing text in modal text boxes
  //   // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  //   $('#modalChangePassword').on('hidden.bs.modal', function () {
  //     $(this).find('input,textarea,select').val('').end()
  //   })
  //   return
  // }

  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
  $('#modalChangePassword').modal('hide')
  // Clear out existing text in modal text boxes
  // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  $('#modalChangePassword').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
}

// instead of having long list of handlers, we have this function do them all here
const addHandlers = () => {
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
