'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const data = getFormFields(this)
// api.changePassword(data)
//   .then(ui.changePasswordSuccessful)
//   .catch(ui.changePasswordFailure)

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // const data = getFormFields(this)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}
const onQuickSignIn = event => {
  event.preventDefault()
  const guest = {
    'credentials': {
      'email': 'e@e',
      'password': 'b'
    }
  }
  api.signIn(guest)
    .then(ui.signInSuccessful)
    .catch(ui.SignInFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onQuickSignIn
}
