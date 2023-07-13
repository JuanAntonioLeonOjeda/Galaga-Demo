import { Player } from './player.js'
import { Enemy } from './enemy.js'

const board = document.getElementById('main-board')
const player = new Player(225, 750, board)

player.insertPlayer()

function start () {
  const playerTimer = setInterval(player.move, 50)
  let enemyTimer = setInterval(function(){
    const enemy = new Enemy(50, 0, board)
    enemy.insertEnemy()
  }, 2000)

}


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


start()