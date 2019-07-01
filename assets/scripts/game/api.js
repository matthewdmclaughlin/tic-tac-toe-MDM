'use strict'

const config = require('../config')
const store = require('../store')

const indexGames = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token =' + store.user.token
    }
  })
}
const createGames = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token =' + store.user.token
    }
  })
}
const showGames = formData => {
  return $.ajax({
    url: config.aprUrl + '/games/:id',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token =' + store.user.token
    }
  })
}
const updateGames = formData => {
  return $.ajax({
    url: config.aprUrl + '/games/:id',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token =' + store.user.token
    }
  })
}
const watchGames = formData => {
  return $.ajax({
    url: config.aprUrl + '/games/:id/watch',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token =' + store.user.token
    }
  })
}
const quitGames = formData => {
  return $.ajax({
    url: config.aprUrl + 'games/',
    method: 'PUT',
    Authorization: 'Token token =' + store.user.token
  })
}
module.exports = {
  indexGames,
  createGames,
  showGames,
  watchGames,
  updateGames,
  quitGames
}
