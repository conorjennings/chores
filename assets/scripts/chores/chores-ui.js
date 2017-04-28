'use strict'

const store = require('../store')

const createChoreSuccess = (data) => {
  store.user = data.user
  console.log('Add Chore Success: ', data)
}

const createChoreFailure = (error) => {
  console.log('Add Chore Failed: ', error)
  // $('#insertChoreFailureAlertMessage').html('Add Chore Failed')
  console.error(error)
}

module.exports = {
  createChoreSuccess,
  createChoreFailure
}
