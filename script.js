import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Bullet } from './bullet.js'

const board = document.getElementById('main-board')
const player = new Player(225, 750, board)
let enemies = []
let playerTimer
let enemyTimer

player.insertPlayer()

function start () {
  playerTimer = setInterval(playerMovement, 50)
  enemyTimer = setInterval(createEnemy, 2000)

}

function playerMovement () {
  player.move()
  if (player.isDead) {
    alert('Game Over')
    clearInterval(playerTimer)
    clearInterval(enemyTimer)
    // const enemies = document.getElementsByClassName('enemy')
    // for(let i = 0; i < enemies.length; i++) {
    //   clearInterval (enemies[i].timerId)
    // }
  }
}

function createEnemy () {
  let randomX = Math.floor(Math.random() * 10) * 50
  const enemy = new Enemy(randomX, 0, board, player)
  enemies.push(enemy)
  enemy.insertEnemy()
}


window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      player.direction = -1
      break
    case 'ArrowRight':
      player.direction = 1
      break
    case ' ':
      const bullet = new Bullet(player.x + 20, player.y - 10, board, enemies)
      bullet.insertBullet()
  }
})

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    player.direction = 0
  }
})


start()