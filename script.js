const board = document.getElementById('main-board')
const player = new Player(225, 750)

function Player(x, y) {
  let self = this
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 10
  this.sprite = document.createElement('div')
  
  this.insertPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    board.appendChild(this.sprite)
  }

  this.move = function () {
    self.x += self.speed * self.direction
    self.sprite.style.left = self.x + 'px'
  }
}

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