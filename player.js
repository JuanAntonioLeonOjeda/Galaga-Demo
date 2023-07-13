function Player(x, y, parent) {
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
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    self.x += self.speed * self.direction
    self.sprite.style.left = self.x + 'px'
  }
}

export { Player }