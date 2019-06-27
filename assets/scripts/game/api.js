'use strict'

const config = require('../config')
const store = require('../store')

const createGame = formData => {
  return $.ajax({
    url: config.apiUrl + '/examples',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame
}
