'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateGames = event => {
  event.preventDefault()
  console.log('new game created')
  const form = event.target
  const formData = getFormFields(form)
  api.createGames(formData)
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}
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
module.exports = {
  onCreateGames,
  onIndexGames,
  onShowGames,
  onWatchGames,
  onUpdateGames
}
