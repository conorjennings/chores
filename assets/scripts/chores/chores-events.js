'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./chores-api')
const ui = require('./chores-ui')
const authUi = require('../auth/auth-ui')

const onCreateChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  // This converts the string version of date to an actual date version for comparison
  // to ensure a user cannot enter a task BEFORE today's date.
  const choreEnteredDate = new Date(data.chore.due_on).toJSON().slice(0, 10).replace(/-/g, '/')
  if (choreEnteredDate < todayDate) { // Can't create a chore before TODAY
    $('.add-chore-error-alert').html('Invalid Due Date')
    $('.add-chore-error-alert').show()
    // This clears out the bootstrap alert box after a few seconds:
    // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
    setTimeout(function () {
      $('.add-chore-error-alert').hide(); $('.add-chore-section').hide(); $('#add-chore').trigger('reset')
    }, 2000)
  } else {
    api.createChore(data)
    .then(function (data) {
      ui.createChoreSuccess(data)
      onGetChoresApi()
    })
    .catch(ui.createChoreFailure)
  }
}

const onGetChores = (event) => {
  event.preventDefault()
    // api.getChores()
    // .then(ui.getChoresSuccess)
    // .catch(ui.failure)
  onGetChoresApi()
}

const onGetChoresApi = () => {
  api.getChores()
    .then(ui.getChoresSuccess)
    .catch(ui.failure)
}

const onGetOneChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getOneChore(data)
  .then(function (data) {
    ui.getOneChoreSuccess(data)
  })
  .catch(ui.getOneChoreFailure)
}

const onUpdateChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  // This converts the string version of date to an actual date version for comparison
  // to ensure a user cannot enter a task BEFORE today's date.
  const choreEnteredDate = new Date(data.chore.due_on).toJSON().slice(0, 10).replace(/-/g, '/')
  if (choreEnteredDate < todayDate) { // Can't create a chore before TODAY
    $('.update-chore-error-alert').html('Invalid Due Date')
    $('.update-chore-error-alert').show()
    // This clears out the bootstrap alert box after a few seconds:
    // Source: http://stackoverflow.com/questions/23101966/bootstrap-alert-auto-close
    setTimeout(function () {
      $('.update-chore-error-alert').hide(); $('.update-chore-section').hide(); $('#update-chore').trigger('reset')
    }, 2000)
  } else {
    api.updateChore(data)
    .then(function (data) {
      ui.updateChoreSuccess(data)
      onGetChoresApi()
    })
    .catch(ui.updateChoreFailure)
  }
}

const onDeleteChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteChore(data)
  .then(function (data) {
    ui.deleteChoreSuccess(data)
    onGetChoresApi()
  })
  .catch(ui.deleteChoreFailure)
}

const showChoreOptions = function () {
  if (authUi.getNewUserFlag()) {
    $('.chore-add-menu').show()
    $('.chore-get-menu').hide()
    $('.chore-get-one-menu').hide()
    $('.chore-update-menu').hide()
    $('.chore-delete-menu').hide()
    $('.chore-clear-menu').hide()
    $('.change-password-menu').hide()
    $('.change-password-section').hide()
    $('.chore-menu').hide()
  }
  if (!authUi.getNewUserFlag()) {
    clearAllChores

    const choresApiResult = onGetChoresApi()
    // If a user  deletes ALL their tasks, adjust the menu buttons to remove update and edit and delete
    if (choresApiResult === '') {
      $('.chore-add-menu').show()
      $('.chore-get-menu').hide()
      $('.chore-get-one-menu').hide()
      $('.chore-update-menu').hide()
      $('.chore-delete-menu').hide()
      $('.chore-clear-menu').hide()
    }

    // $('.chore-add-menu').show()
    // $('.chore-get-menu').show()
    // $('.chore-get-one-menu').show()
    // $('.chore-update-menu').show()
    // $('.chore-delete-menu').show()
    // $('.chore-clear-menu').show()
    $('.change-password-menu').hide()
    $('.change-password-section').hide()
    $('.chore-menu').hide()
  }
}

const onShowAddChore = function () {
  $('.add-chore-section').show()
  $('#chore-content').empty()
  $('.delete-chore-section').hide()
  $('.update-chore-section').hide()
  $('.get-one-chore-section').hide()

  $('#delete-chore').trigger('reset')
  $('#get-one-chore').trigger('reset')
  $('#update-chore').trigger('reset')
}

const onHideAddChore = function () {
  $('.add-chore-section').hide()
}

const onShowUpdateChore = function () {
  $('.update-chore-section').show()
  $('#one-chore-section').hide()
  $('.add-chore-section').hide()
  $('.delete-chore-section').hide()
  $('.get-one-chore-section').hide()

  $('#delete-chore').trigger('reset')
  $('#add-chore').trigger('reset')
  $('#get-one-chore').trigger('reset')
}

const onHideUpdateChore = function () {
  $('.update-chore-section').hide()
}

const onShowDeleteChore = function () {
  $('.delete-chore-section').show()
  $('#one-chore-section').hide()
  $('.add-chore-section').hide()
  $('.update-chore-section').hide()
  $('.get-one-chore-section').hide()

  $('#get-one-chore').trigger('reset')
  $('#add-chore').trigger('reset')
  $('#update-chore').trigger('reset')
}

const onHideDeleteChore = function () {
  $('.delete-chore-section').hide()
}

const onShowGetOneChore = function () {
  $('.get-one-chore-section').show()
  $('#one-chore-content').empty()
  $('.delete-chore-section').hide()
  $('.update-chore-section').hide()
  $('.add-chore-section').hide()

  $('#delete-chore').trigger('reset')
  $('#add-chore').trigger('reset')
  $('#update-chore').trigger('reset')
}

const onHideGetOneChore = function () {
  $('.get-one-chore-section').hide()
  $('#one-chore-content').empty()
}

const clearAllChores = function () {
  $('#chore-content').empty()
}

const showHomeMenu = (data) => {
  $('#chore-content').empty()
  $('.sign-up-menu').hide()
  $('.sign-in-menu').hide()
  $('.sign-out-menu').show()
  $('.change-password-menu').show()
  $('.chore-menu').show()
  $('.sign-up-section').hide()
  $('.sign-in-section').hide()
  $('.chore-get-menu').hide()
  $('.chore-get-one-menu').hide()
  $('.chore-add-menu').hide()
  $('.chore-update-menu').hide()
  $('.chore-delete-menu').hide()
  $('.chore-clear-menu').hide()
  $('.chore-get-section').hide()
  $('.get-one-chore-section').hide()
  $('.add-chore-section').hide()
  $('.update-chore-section').hide()
  $('.delete-chore-section').hide()
}

const addHandlers = () => {
  $('.home-menu').on('click', showHomeMenu)
  $('.chore-menu').on('click', showChoreOptions)
  $('.chore-clear-menu').on('click', clearAllChores)
  $('.chore-add-menu').on('click', onShowAddChore)
  $('#add-chore').on('submit', onCreateChore)
  $('#add-chore').on('reset', onHideAddChore)

  $('.chore-update-menu').on('click', onShowUpdateChore)
  $('#update-chore').on('submit', onUpdateChore)
  $('#update-chore').on('reset', onHideUpdateChore)

  $('.chore-delete-menu').on('click', onShowDeleteChore)
  $('#delete-chore').on('submit', onDeleteChore)
  $('#delete-chore').on('reset', onHideDeleteChore)

  $('.chore-get-menu').on('click', onGetChores)

  $('.chore-get-one-menu').on('click', onShowGetOneChore)
  $('#get-one-chore').on('submit', onGetOneChore)
  $('#get-one-chore').on('reset', onHideGetOneChore)
}

module.exports = {
  addHandlers
}
