// INSERTAR AUDIO
// var nombreVariable = new Audio('ruta del audio')
// Por ejemplo:
// var shoot = new Audio ('assets/sounds/shoot.mp3)

import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Bullet } from './bullet.js'

const board = document.getElementById('main-board')
const player = new Player(225, 750, board)
let enemies = [] // Array donde almacenar la información de todos los enemigos en pantalla
let playerTimer
let enemyTimer


function start () {
  player.insertPlayer() //Insertamos el div que representa el player en el DOM
  playerTimer = setInterval(playerMovement, 50)
  enemyTimer = setInterval(createEnemy, 2000) //Creamos un nuevo enemigo cada 2seg

}

function playerMovement () {
  player.move() // Función que se encarga de actualizar la posición del jugador en el DOM
  if (player.isDead) { //Si player.isDead === true, paramos el juego
    alert('Game Over')
    clearInterval(playerTimer)
    clearInterval(enemyTimer)
    for(let i = 0; i < enemies.length; i++) {
      clearInterval (enemies[i].timerId)
    }
    // Aquí podríamos resetear los valores para una nueva partida
  }
}

function createEnemy () {
  let randomX = Math.floor(Math.random() * 10) * 50 // Generamos una coordenada horizontal aleatoria, en intervalos de 50px
  const enemy = new Enemy(randomX, 0, board, player, enemies)
  enemies.push(enemy) // Insertamos el enemigo creado en el array de la línea 7
  enemy.insertEnemy() // Insertamos el enemigo en el DOM
}


window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      player.direction = -1 // Moverse a la izquierda significa reducir el valor de 'x'
      break
    case 'ArrowRight':
      player.direction = 1  // Moverse a la derecha significa aumentar el valor de 'x'
      break
    case ' ':
      const bullet = new Bullet(player.x + 20, player.y - 10, board, enemies) // Creamos una bala usando las coordenadas del jugador
      bullet.insertBullet() // Insertamos la bala en el DOM
  }
})

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    player.direction = 0 //Al levantar la tecla correspondiente, dejamos de movernos
  }
})


start() // Arrancamos el juego