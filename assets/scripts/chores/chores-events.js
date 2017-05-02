'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./chores-api')
const ui = require('./chores-ui')

const onCreateChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createChore(data)
  .then(function (data) {
    ui.createChoreSuccess(data)
    onGetChoresApi()
  })
  .catch(ui.createChoreFailure)
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
  api.updateChore(data)
  .then(function (data) {
    ui.updateChoreSuccess(data)
    onGetChoresApi()
  })
  .catch(ui.updateChoreFailure)
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
  clearAllChores
  $('.chore-add-menu').show()
  $('.chore-get-menu').show()
  $('.chore-get-one-menu').show()
  $('.chore-update-menu').show()
  $('.chore-delete-menu').show()
  $('.chore-clear-menu').show()
  $('.change-password-menu').hide()
}

const onShowAddChore = function () {
  $('.add-chore-section').show()
  $('#chore-content').empty()
  $('.delete-chore-section').hide()
  $('.update-chore-section').hide()
  $('.get-one-chore-section').hide()
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
}

const onHideGetOneChore = function () {
  $('.get-one-chore-section').hide()
  $('#one-chore-content').empty()
}

const clearAllChores = function () {
  $('#chore-content').empty()
}

const addHandlers = () => {
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
