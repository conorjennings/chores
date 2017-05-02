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
  })
  .catch(ui.createChoreFailure)
}

const onGetChores = (event) => {
  event.preventDefault()
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
  })
  .catch(ui.updateChoreFailure)
}

const onDeleteChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteChore(data)
  .then(function (data) {
    ui.deleteChoreSuccess(data)
  })
  .catch(ui.deleteChoreFailure)
}

const onClearChores = (event) => {
  event.preventDefault()
  ui.clearChores()
}

const showChoreOptions = function () {
  $('.chore-get-menu').show()
  $('.chore-get-one-menu').show()
  $('.chore-update-menu').show()
  $('.chore-delete-menu').show()
  $('.change-password-menu').hide()
}

const addHandlers = () => {
  $('.chore-menu').on('click', showChoreOptions)
  $('#add-chore').on('submit', onCreateChore)
  $('#get-chores').on('click', onGetChores)
  $('#get-one-chore').on('submit', onGetOneChore)
  $('#clear-chores').on('click', onClearChores)
  $('#update-chore').on('submit', onUpdateChore)
  $('#delete-chore').on('submit', onDeleteChore)
}

module.exports = {
  addHandlers
}
