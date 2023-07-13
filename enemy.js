function Enemy(x,y, parent) {
  var self = this
  this.x = x
  this.y = y
  this.speed = 10
  this.sprite = document.createElement('div')

  this.insertEnemy = function () {
    this.sprite.classList.add('enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    self.y += self.speed
    self.sprite.style.top = self.y + 'px'
  }

  this.timerId = setInterval(this.move, 100)
}

export { Enemy }