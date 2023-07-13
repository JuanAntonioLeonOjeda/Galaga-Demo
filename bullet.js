function Bullet (x, y, board, player, array) {
  this.x = x
  this.y = y
  this.sprite = document.createElement('div')

  this.insertBullet = function () {
    this.sprite.classList.add('bullet')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }
}

export { Bullet }