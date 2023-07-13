function Enemy(x,y, parent, player) {
  var self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.speed = 10
  this.sprite = document.createElement('div')

  this.insertEnemy = function () {
    this.sprite.classList.add('enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    self.checkCollision()

    self.y += self.speed
    self.sprite.style.top = self.y + 'px'

    if (self.y >= 750) {
      self.removeEnemy()
    }
  }

  this.removeEnemy = function(){
    parent.removeChild(this.sprite)
    clearInterval(this.timerId)
  }

  this.checkCollision = function () {
    console.log()
    if (
        this.y + this.height >= player.y &&
        this.y <= player.y + player.height &&
        this.x + this.width >= player.x &&
        this.x <= player.x + player.width
       ) 
    {
      player.isDead = true
    }
  }

  this.timerId = setInterval(this.move, 100)
}

export { Enemy }