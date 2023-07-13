function Player(x, y, parent) {
  let self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.direction = 0
  this.speed = 5 // Cantidad de píxeles que se va a mover en cada llamada a la función 'move'
  this.isDead = false
  this.sprite = document.createElement('div') // Elemento que representa al jugador en el DOM

  this.insertPlayer = function () { // Función encargada de insertar al player en el DOM
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.top = this.y + 'px'
    parent.appendChild(this.sprite)
  }

  this.move = function () {
    let newX = self.x + self.speed * self.direction // Calculamos la nueva posición en una variable auxiliar
    if (newX >= 0 && newX <= 450) { // Nos movemos solo si las nuevas coordenadas del jugador están dentro de los límites del tablero
      self.x = newX // Actualizamos la coordenada horizontal del jugador con el valor de la variable auxiliar
      self.sprite.style.left = self.x + 'px'
    }
  }
}

export { Player }