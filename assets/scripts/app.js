'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('#box').on('click', gameEvents.onClickBox)
  $('#new-gameboard').on('click', gameEvents.onCreateGames)
  $('.cell').on('click', gameEvents.onUpdateGames)
  $('#quit-game').on('click', gameEvents.onQuitGames)
  $('#quickSignIn').on('click', authEvents.onQuickSignIn)
  $('#get-game').on('click', gameEvents.onGetGame)
})
