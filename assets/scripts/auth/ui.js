'use strict'

const store = require('../store')
// Give feedback to the user after each action's success or failure. FIX:No success/failure messaging
const successMessage = message => {
  $('#message').text(message)
  $('#message').css('background-color', 'green')
  $('#message').addClass('.success')
  $('#message').removeClass('.failure')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').css('background-color', 'red')
  $('#message').removeClass('.success')
  $('#message').addClass('.failure')
  $('form').trigger('reset')
}
const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
}
const signUpFailure = () => {
  failureMessage('Sign up failed')
}
const signInSuccessful = responseData => {
  successMessage('You signed in successfully')
  store.user = responseData.user
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#new-gameboard').removeClass('hidden')
  $('#quitGame').removeClass('hidden')
  $('#quickSignIn').addClass('hidden')
  if (responseData.user.email !== 'e@e') {
    $('#get-game').removeClass('hidden')
  }
}
const signInFailure = responseData => {
  failureMessage('Sign in failed')
  store.user = responseData.user
}
// const quickSignIn = responseData => {
//   $('#quickSignIn').addClass('hidden')
//
//   successMessage('You signed in successfully')
// }
const signOutSuccessful = responseData => {
  successMessage('You have signed out successfully!')
  // After signing out the page doesn't change so no way to sign back in. FIX:
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#new-gameboard').addClass('hidden')
  $('#quitGame').addClass('hidden')
  $('#quickSignIn').removeClass('hidden')
  $('.container').addClass('hidden')
  $('#get-game').addClass('hidden')
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed. Please check your username and/or password')
  // $('#message').removeClass('hidden')
  // $('#message').addClass('failure')
}
const changePasswordFailure = () => {
  failureMessage('You have NOT changed your password successfully')
}
const changePasswordSuccessful = () => {
  successMessage('You have changed your password')
}
module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordFailure,
  changePasswordSuccessful
  // quickSignIn
}
