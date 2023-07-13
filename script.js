const board = document.getElementById('main-board')
const player = new Player(225, 750)

function Player(x, y) {
  this.x = x
  this.y = y
  this.sprite = document.createElement('div')
  
  this.insertPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    board.appendChild(this.sprite)
  }
}

player.insertPlayer()

