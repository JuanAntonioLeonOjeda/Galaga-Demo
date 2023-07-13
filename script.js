import { Player } from './player.js'

const board = document.getElementById('main-board')
const player = new Player(225, 750, board)

player.insertPlayer()

const timerId = setInterval(player.move, 50)

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      player.direction = -1
      break
    case 'ArrowRight':
      player.direction = 1
      break
  }
})

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    player.direction = 0
  }
})