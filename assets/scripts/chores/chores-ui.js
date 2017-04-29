'use strict'

const store = require('../store')
const showChoresTemplate = require('../templates/chore-listing.handlebars')
const createChoreSuccess = (data) => {
  store.user = data.user
  console.log('Add Chore Success: ', data)
}

const createChoreFailure = (error) => {
  console.log('Add Chore Failed: ', error)
  // $('#insertChoreFailureAlertMessage').html('Add Chore Failed')
  console.error(error)
}

const getChoresSuccess = (data) => {
  console.log(data)
  const showChoresHtml = showChoresTemplate({ chores: data.chores })

  $('#chore-content').html(showChoresHtml)

  $('button').on('click', function (e) {
    e.preventDefault()
    $(e.target).parent().parent().remove()
  })
}

const getChoresFailure = (error) => {
  console.log('Get Chores Failed: ', error)
  console.error(error)
}

const updateChoreSuccess = (data) => {
  console.log('Add Chore Success: ', data)
}

const updateChoreFailure = (error) => {
  console.log('Update Chore Failed: ', error)
}

const clearChores = () => {
  $('#chore-content').empty()
}

module.exports = {
  createChoreSuccess,
  createChoreFailure,
  getChoresSuccess,
  getChoresFailure,
  clearChores,
  updateChoreSuccess,
  updateChoreFailure
}
