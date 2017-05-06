'use strict'

// const store = require('../store')
const showChoresTemplate = require('../templates/chore-listing.handlebars')

const createChoreSuccess = (data) => {
  $('.add-chore-section').hide()
  $('#add-chore').trigger('reset') // clear out text box entry
  $('.chore-add-menu').show()
  $('.chore-get-menu').show()
  $('.chore-get-one-menu').show()
  $('.chore-update-menu').show()
  $('.chore-delete-menu').show()
  $('.chore-clear-menu').show()
  // store.user = data.user  // Closed to my issue log https://github.com/ga-wdi-boston/full-stack-project/issues/772
}

const createChoreFailure = (error) => {
  console.log('createChoreFailure: ', error)
  // $('#insertChoreFailureAlertMessage').html('Add Chore Failed')
  console.error(error)
}

const getChoresSuccess = (data) => {
  const showChoresHtml = showChoresTemplate({ chores: data.chores })
  $('#chore-content').html(showChoresHtml)
}

const getChoresFailure = (error) => {
  console.log('getChoresFailure: ', error)
}

const updateChoreSuccess = (data) => {
  console.log('updateChoreSuccess: ', data)
  $('.update-chore-section').hide()
  $('#update-chore').trigger('reset') // clear out text box entry
}

const updateChoreFailure = (error) => {
  console.log('updateChoreFailure: ', error)
  $('.update-chore-error-alert').html('Invalid ID')
  $('.update-chore-error-alert').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.update-chore-error-alert').hide(); $('.update-chore-section').hide(); $('#update-chore').trigger('reset')
  }, 1000)
}

const deleteChoreSuccess = (data) => {
  console.log('deleteChoreSuccess: ', data)
  $('.delete-chore-section').hide()
  $('#delete-chore').trigger('reset') // clear out text box entry
}

const deleteChoreFailure = (error) => {
  console.log('deleteChoreFailure: ', error)
  $('.delete-chore-error-alert').html('Invalid ID')
  $('.delete-chore-error-alert').show()

  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.delete-chore-section').hide(); $('.delete-chore-error-alert').hide(); $('#delete-chore').trigger('reset')
  }, 1000)
}

const clearChores = () => {
  $('#chore-content').empty()
}

const getOneChoreSuccess = (data) => {
  $('#one-chore-content').html('<h2>Chore Details:<br></h2>')
  $('#one-chore-content').append('<h3>ID: ' + data.chore.id + '</h3>')
  $('#one-chore-content').append('<h3>Description: ' + data.chore.task + '</h3>')
  $('#one-chore-content').append('<h3>Due Date: ' + data.chore.due_on + '</h3>')
  $('#one-chore-content').append('<h3>Priority Level: ' + data.chore.priority + '</h3>')
  $('#chore-content').empty()
}

const getOneChoreFailure = (error) => {
  console.log('getOneChoreFailure: ', error)
  $('.get-one-chore-error-alert').html('Invalid ID')
  $('.get-one-chore-error-alert').show()
  // This clears out the bootstrap alert box after a few seconds:
  // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
  setTimeout(function () {
    $('.get-one-chore-section').hide(); $('.get-one-chore-error-alert').hide(); $('#get-one-chore').trigger('reset')
  }, 1000)
}

module.exports = {
  createChoreSuccess,
  createChoreFailure,
  getChoresSuccess,
  getChoresFailure,
  clearChores,
  updateChoreSuccess,
  updateChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure,
  getOneChoreSuccess,
  getOneChoreFailure
}
