'use strict'

const config = require('../config')
const store = require('../store')
// Create new games on the server. (CREATE) FIX: No POST request to create a new game.

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: ''
  })
}
const indexGames = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const createGames = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     data: formData,
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token =' + store.user.token
//     }
//   })
// }
// update a game by storing new moves. (UPDATE) FIX: No PATCH request for updating games.
const updateGames = (cellIndex, move, gameOver) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: move
        },
        over: gameOver
      }
    }
  })
}
// Visually display the results of retrieving game statistics, such as total games won by a user. (READ)  FIX: No GET request to retrieve game stats.

const watchGames = formData => {
  return $.ajax({
    url: config.apiUrl + '/games/:id/watch',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const quitGames = () => {
  return $.ajax({
    url: config.apiUrl + 'games/',
    method: 'DELETE',
    Authorization: 'Token token=' + store.user.token
  })
}
module.exports = {
  indexGames,
  createGame,
  watchGames,
  updateGames,
  quitGames
}
