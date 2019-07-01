'use strict'

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
  // successMessage('You have created an example successfully!')
  successMessage(`Created: ${responseData.game.text}`)
}
const createGameFailure = responseData => {
  failureMessage('Create game failed')
}
const playerMessage = message => {
  $('.message').text('Current Player is' + ' ' + message)
}
// const onClick = event => {
//   const text = $(event.target).text()
//   if (text === '') {
//     const index = $(event.target).data('cell-index')
//     console.log(index)
//     gameGrid[index] = currentPlayer
//     winCombinations()
//     api.onUpdateGames(index, currentPlayer, winCondition)
//     Switchplayer()
//   }
// }
// let currentTurn = event.target.id
//   console.log(currentTurn)

module.exports = {
  createGameFailure,
  createGameSuccessful,
  playerMessage
  // winCondition,
  // onClick

}
