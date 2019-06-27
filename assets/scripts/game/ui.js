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

module.exports = {
  createGameFailure,
  createGameSuccessful
}
