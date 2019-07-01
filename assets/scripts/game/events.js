'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateGames = event => {
  event.preventDefault()
  console.log('new game created')
  const form = event.target
  const formData = getFormFields(form)
  api.createGames(formData)
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}
// const playerMove = event => {
//   console.log('Good move!')
//   api.updateGames()
//     .then(ui.updateGameSuccessful)
//     .catch(ui.updateGameFailure)
// }
const onIndexGames = event => {
  event.preventDefault()
  console.log('new game indexed')
  const form = event.target
  const formData = getFormFields(form)
  api.createGames(formData)
    .then(ui.indexGameSuccessful)
    .catch(ui.indexGameFailure)
}
const onShowGames = event => {
  event.preventDefault()
  console.log('show game')
  const form = event.target
  const formData = getFormFields(form)
  api.showGames(formData)
    .then(ui.showGameSuccessful)
    .catch(ui.showGameFailure)
}
const onWatchGames = event => {
  event.preventDefault()
  console.log('watch game')
  const form = event.target
  const formData = getFormFields(form)
  api.showGames(formData)
    .then(ui.watchGameSuccessful)
    .catch(ui.watchGameFailure)
}
const onUpdateGames = event => {
  event.preventDefault()
  console.log('game updated')
  const form = event.target
  const formData = getFormFields(form)
  api.updateGames(formData)
    .then(ui.updateGameSuccessful)
    .catch(ui.updateGameFailure)
}
const onQuitGames = event => {
  event.preventDefault()
  console.log('game abandoned')
  api.quitGames('Quitter!')
}
const onClickedSquare = event => {
  console.log('square clicked', event)
  // check target for content to see if move is allowed
  if ($(event.target).text() === 'O' || $(event.target).text() === 'X') {
    console.log('Invalid Move')
  } else {
    if (store.currentPlayer === 'O') {
      $(event.target).text('O')
      store.currentPlayer = 'X'
      ui.playerMessage('X')
    } else {
      $(event.target).text('X')
      store.currentPlayer = 'O'
      ui.playerMessage('O')
    }
  }
}
module.exports = {
  onCreateGames,
  onIndexGames,
  onShowGames,
  onWatchGames,
  onUpdateGames,
  onClickedSquare,
  onQuitGames
}
