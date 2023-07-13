function Enemy(x,y, parent) {
  this.x = x
  this.y = y
  this.sprite = document.createElement('div')

  this.insertEnemy = function () {
    this.sprite.classList.add('enemy')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }
}

export { Enemy }