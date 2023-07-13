function Bullet (x, y, parent, array) {
  var self = this
  this.x = x
  this.y = y
  this.height = 10
  this.width = 10
  this.speed = 10
  this.sprite = document.createElement('div')

  this.insertBullet = function () {
    this.sprite.classList.add('bullet')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    self.checkCollision()

    self.y -= self.speed // Movemos la bala hacia arriba
    self.sprite.style.top = self.y + 'px'

    if (self.y === 0) {
      self.removeBullet() // Quitamos la bala de la pantalla si ha llegado al borde superior del escenario
    }
  }

  this.removeBullet = function () {
    parent.removeChild(this.sprite)
    clearInterval(this.timerId)
  }

  this.checkCollision = function () {
    array.forEach(function(enemy, index){
      if (
        self.y + self.height >= enemy.y &&
        self.y <= enemy.y + enemy.height &&
        self.x + self.width >= enemy.x &&
        self.x <= enemy.x + enemy.width
      ) {
        self.removeBullet() // En caso de colisionar con un enemigo, quitamos tanto la bala como el enemigo de la pantalla
        enemy.removeEnemy(index)
      }
    })
  }

  this.timerId = setInterval(this.move, 50)
}

export { Bullet }