'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
store.play = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const onCreateGames = event => {
  event.preventDefault()
  store.over = false
  store.play = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  store.currentPlayer = 'X'
  $('.cell').text('')
  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}
const addHandlers = () => {
  $('#new-game').on('click', onCreateGames)
}
const onIndexGames = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGames(formData)
    .then(ui.indexGameSuccessful)
    .catch(ui.indexGameFailure)
}
const onShowGames = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showGames(formData)
    .then(ui.showGameSuccessful)
    .catch(ui.showGameFailure)
}
const onWatchGames = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showGames(formData)
    .then(ui.watchGameSuccessful)
    .catch(ui.watchGameFailure)
}
const onQuitGames = event => {
  event.preventDefault()
  api.quitGames()
}
const checkWinner = (id1, id2, id3) => {
  if (store.play[id1] === store.play[id2] && store.play[id2] === store.play[id3]) {
    return true
  }
  return false
}

const draw = () => {
  if (store.play.every(p => (typeof p !== 'number'))) {
    store.over = true
    $('#message').text('Draw game')
  }
}
const winner = () => {
  if (checkWinner(0, 1, 2) || checkWinner(3, 4, 5) || checkWinner(6, 7, 8) || checkWinner(0, 3, 6) || checkWinner(1, 4, 7) || checkWinner(2, 5, 8) || checkWinner(0, 4, 8) || checkWinner(2, 4, 6)) {
    store.over = true
    store.click = true
    $('#message').text(store.previousPlayer + ' is the winner')
  }
}
const onUpdateGames = event => {
  // check target for content to see if move is allowed
  if (store.over !== true) {
    if ($(event.target).text() === 'O' || $(event.target).text() === 'X') {
    } else {
      if (store.currentPlayer === 'O') {
        $(event.target).text('O')
        store.currentPlayer = 'X'
        store.previousPlayer = 'O'
        ui.playerMessage('X')
      } else {
        $(event.target).text('X')
        store.currentPlayer = 'O'
        store.previousPlayer = 'X'
        ui.playerMessage('O')
      }
      store.play[event.target.id] = store.previousPlayer
      api.updateGames(event.target.id, store.previousPlayer, false)
        .then(ui.updateGameSuccessful)
      draw()
      winner()
    }
    // check for win here
    // Visually display which side won if a player gets three in a row or show a draw if neither wins. FIX No win message appearing when game is complete.
    // Support playing multiple games, one at a time.  FIX No way to restart game.}
    // const winnerCheck = (id1, id2, id3) => {
    //
  } else {
    $('#message').text('Further Movements Disabled')
  }
}

const onGetGame = event => {
  event.preventDefault()

  api.indexGames()
    .then(ui.indexGameSuccessful)
    .catch(ui.indexGameFailure)
}
module.exports = {
  onCreateGames,
  onIndexGames,
  onShowGames,
  onWatchGames,
  onUpdateGames,
  onQuitGames,
  addHandlers,
  onGetGame
  // winnerCheck
}
