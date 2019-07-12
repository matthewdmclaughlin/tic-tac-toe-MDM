'use strict'
const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // Clear out our getFormFields
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear out our getFormFields
  $('form').trigger('reset')
}

const createGameSuccessful = responseData => {
  successMessage(`Create game successfully`)
  store.newGame = responseData.game
  $('.container').removeClass('hidden')
}
const createGameFailure = responseData => {
  failureMessage('Create game failed')
}
const playerMessage = message => {
  $('#message').text('Current Player is' + ' ' + message)
}
const playerQuit = message => {
  $('#quitgame').text('You have exited and saved this game in progress')
}
const indexGameSuccessful = data => {
  $('#message').text('Total games : ' + data.games.length)
}

const indexGameFailure = data => {
  $('#message').text('Failed to get games')
}
module.exports = {
  createGameSuccessful,
  createGameFailure,
  playerMessage,
  playerQuit,
  indexGameSuccessful,
  indexGameFailure
}
