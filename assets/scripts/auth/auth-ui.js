'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  store.user = data.user
  console.log('sign up success')
}

const signUpFailure = (error) => {
  $('#signUpErrorAlertMessage').html("Passwords don't match or email already taken")
  console.error(error)
}

// important to use tokens (change each time you sign in) over using IDs
// see screen shot on desktop showing the token
const signInSuccess = (data) => {
  // just save whatever you goet back during a sign in in this store object that will hold the token.
  store.user = data.user
  // console.log('Token info: ', store.user.token)
  $('.sign-up-menu').hide()
  $('.chore-menu').show()
  $('.change-password-menu').show()
}

const signInFailure = (error) => {
  console.log('sign in failure')
  $('#signInErrorAlertMessage').html('Incorrect Email or Password.')
  console.error('sign in failure. Error is: ', error)
}

const signOutSuccess = () => {
  console.log('>>>>>>>>>>>>> sign out success')
  store.user = null // this gets rid of data stored in cache
  $('.sign-up-menu').show()
  $('.chore-menu').hide()
  $('.change-password-menu').hide()
}

const signOutFailure = (error) => {
  console.error('sign out failure. Error is: ', error)
}

const changePasswordSuccess = () => {
  $('#change-password-success-message').html('Password changed')
  $('.alert-success').show()
}

const changePasswordFailure = (error) => {
  console.error('change password failure. Error is: ', error)
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
