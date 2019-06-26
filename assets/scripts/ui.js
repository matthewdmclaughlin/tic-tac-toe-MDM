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
const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('You failed to sign up')
}

module.exports = {
  signUpSuccessful,
  signUpFailure
}
