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
// function markDiv(a) {
//   let myDiv = document.getElementbyId(a);
//   if (currentPlayer == 0) {
//     div.removeClass('empty-div');
//     div.addClass('x-move');
//     currentPlayer = 1;
//   } else {
//     title.removeClass('empty-div')
//     title.addClass('played-div')
//   }
// }
// function markDiv(a){
//   let div = document.getElementbyId(a);
//   if (currentPlayer == 0)
// }
module.exports = {
  indexGames,
  createGames,
  showGames,
  watchGames,
  updateGames
}
