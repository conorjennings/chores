'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  store.user = data.user

  // This closes the form after a successful sign up:
  $('#sign-up').trigger('reset') // http://stackoverflow.com/questions/16452699/how-to-reset-a-form-using-jquery-with-reset-method
  $('.sign-up-menu').hide()
}

const signUpFailure = (error) => {
  console.error(error)
  $('.sign-up-error-info').html('User already exists. Try a different email address')
  $('.sign-up-error-info').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.sign-up-error-info').alert('close'); $('.sign-up-section').hide(); $('#sign-up').trigger('reset')
  }, 3000)
}

// Important to use tokens (change each time you sign in) over using IDs
const signInSuccess = (data) => {
  // just save whatever you got back during a sign in in this store object that will hold the token.
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-up-menu').hide()
  $('.sign-in-menu').hide()
  $('.sign-out-menu').show()
  $('.change-password-menu').show()
  $('.chore-menu').show()

  $('.sign-up-section').hide()
  $('.sign-in-section').hide()
}

const signInFailure = (error) => {
  console.error('sign in failure. Error is: ', error)
  $('.sign-in-error-alert').html('Incorrect Email or Password.')
  $('.sign-in-error-alert').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.sign-in-error-alert').alert('close'); $('.sign-in-section').hide(); $('#sign-in').trigger('reset')
  }, 2000)
}

const signOutSuccess = () => {
  store.user = null // this gets rid of data stored in cache
  $('.sign-up-menu').show()
  $('.sign-in-menu').show()
  $('.change-password-menu').hide()
  $('.sign-out-menu').hide()
  $('.chore-menu').hide()
  $('.chore-get-menu').hide()
  $('.chore-get-one-menu').hide()
  $('.chore-update-menu').hide()
  $('.chore-delete-menu').hide()
  $('.chore-add-menu').hide()
  $('.chore-clear-menu').hide()

  $('.change-password-section').hide()
  $('.sign-in-section').hide()
  $('.sign-up-section').hide()
  $('.delete-chore-section').hide()
  $('.update-chore-section').hide()
  $('.add-chore-section').hide()
  $('.get-one-chore-section').hide()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  $('#chore-content').empty()
  $('#one-chore-content').empty()
}

const signOutFailure = (error) => {
  console.error('sign out failure. Error is: ', error)
}

const changePasswordSuccess = () => {
  $('.change-password-success-message').html('Password successfully changed')
  $('.change-password-success-message').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.change-password-success-message').alert('close'); $('.change-password-section').hide(); $('#change-password').trigger('reset')
  }, 2000)
}

const changePasswordFailure = (error) => {
  console.error('changePasswordFailure. Error: ', error)
  $('.chg-passw-error-alert').html('Either your current password is incorrect or your new passwords don\'t match.')
  $('.chg-passw-error-alert').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.chg-passw-error-alert').alert('close'); $('.change-password-section').hide(); $('#change-password').trigger('reset')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure

}
