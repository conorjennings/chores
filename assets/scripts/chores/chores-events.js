'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./chores-api')
const ui = require('./chores-ui')

const onCreateChore = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('onCreateChore: data is', data)
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
  console.log('>>>>> onUpdateChore: data is', data)
  api.updateChore(data)
  .then(function (data) {
    ui.updateChoreSuccess(data)
  })
  .catch(ui.updateChoreFailure)
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
}

module.exports = {
  addHandlers
}
