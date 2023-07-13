function Player(x, y, parent) {
  let self = this
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 5
  this.sprite = document.createElement('div')

  this.insertPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    let newX = self.x + self.speed * self.direction
    if (newX >= 0 && newX <= 450) {
      self.x = newX
      self.sprite.style.left = self.x + 'px'
    }
  }
}

export { Player }