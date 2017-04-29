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
  console.log('>>>>> onDeleteChore: data is', data)
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

const addHandlers = () => {
  $('#add-chore').on('submit', onCreateChore)
  $('#get-chores').on('click', onGetChores)
  $('#clear-chores').on('click', onClearChores)
  $('#update-chore').on('submit', onUpdateChore)
  $('#delete-chore').on('submit', onDeleteChore)
}

module.exports = {
  addHandlers
}
