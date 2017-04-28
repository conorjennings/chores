'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  store.user = data.user
  console.log('sign up success')
  $('#sign-up-modal').hide()
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
  console.log('>>>>>>>>>>>>>>>>>>>>>>> sign in success')
  console.log('Token info: ', store.user.token)
  // $('#sign-up-modal').hide()
  // $('#sign-in-modal').hide()
  // $('#change-password-modal').show()
  // $('#sign-out-modal').show()
  // $('#start-game-modal').show()
  // $('#tic-tac-game-board').show()
  // $('#game-reset-modal').hide()
  // $('#game-stats-modal').hide()
}

const signInFailure = (error) => {
  console.log('sign in failure')
  $('#signInErrorAlertMessage').html('Incorrect Email or Password.')
  console.error('sign in failure. Error is: ', error)
}

const signOutSuccess = () => {
  store.user = null // this gets rid of data stored in cache
  console.log('sign out success')
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#change-password-modal').hide()
  $('#sign-out-modal').hide()
}

const signOutFailure = (error) => {
  console.error('sign out failure. Error is: ', error)
}

const changePasswordSuccess = () => {
  console.log('change password success')
  $('#change-password-modal').hide()
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
