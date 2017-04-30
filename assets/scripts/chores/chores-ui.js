'use strict'

// const store = require('../store')
const showChoresTemplate = require('../templates/chore-listing.handlebars')

const createChoreSuccess = (data) => {
  console.log('>>>>>Add Chore Success: ', data)
  // store.user = data.user  // Closed to my issue log https://github.com/ga-wdi-boston/full-stack-project/issues/772
}

const createChoreFailure = (error) => {
  console.log('Add Chore Failed: ', error)
  // $('#insertChoreFailureAlertMessage').html('Add Chore Failed')
  console.error(error)
}

const getChoresSuccess = (data) => {
  const showChoresHtml = showChoresTemplate({ chores: data.chores })
  $('#chore-content').html(showChoresHtml)
}

const getChoresFailure = (error) => {
  console.log('Get Chores Failed: ', error)
}

const updateChoreSuccess = (data) => {
  console.log('Add Chore Success: ', data)
}

const updateChoreFailure = (error) => {
  console.log('Update Chore Failed: ', error)
}

const deleteChoreSuccess = (data) => {
  console.log('Delete Chore Success: ', data)
}

const deleteChoreFailure = (error) => {
  console.log('Delete Chore Failed: ', error)
}

const clearChores = () => {
  $('#chore-content').empty()
}

const getOneChoreSuccess = (data) => {
  $('#one-chore-content').html('<ol>')
  $('#one-chore-content').append('<li>' + data.chore.id + '</li>')
  $('#one-chore-content').append('<li>' + data.chore.task + '</li>')
  $('#one-chore-content').append('<li>' + data.chore.due_on + '</li>')
  $('#one-chore-content').append('<li>' + data.chore.priority + '</li>')
  $('#one-chore-content').append('</ol>')

  // This code was clearing out screen when i hit 'Get Chores' button twice. Turned it off..
  $('button').on('click', function (e) {
    e.preventDefault()
    $(e.target).parent().parent().remove()
  })
}

const getOneChoreFailure = (error) => {
  console.log('Get 1 Chore Failed: ', error)
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
