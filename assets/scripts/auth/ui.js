'use strict'
// save const store below for once I have SignInFailure ready
// const store = require('./store')
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
const signInSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You signed in successfully')
  store.user = responseData.user
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
module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure
}
