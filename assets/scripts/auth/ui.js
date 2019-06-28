'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').addClass('.success')
  $('#message').removeClass('.failure')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
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
  console.log('responseData is', responseData)
  successMessage('You signed in successfully')
  store.user = responseData.user
  $('#change-password').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.container').removeClass('hidden')
}
const signInFailure = responseData => {
  console.log('responseData is', responseData)
  failureMessage('Sign in failed')
  store.user = responseData.user
}
const signOutSuccessful = responseData => {
  successMessage('You have signed out successfully!')
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed. Please check your username and/or password')
}
const changePasswordFailure = () => {
  successMessage('You have changed your password successfully')
}
const changePasswordSuccessful = () => {
  successMessage('You have changed your password successfully')
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
}
