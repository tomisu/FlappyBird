export default class JavierController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'JavierEzk';
    this.safetyDistance = 50; // Distancia de seguridad para evitar colisiones
  }

  loop(birdData, pipes, scene, dt) {
    // CORRECCIÓN: Me gusta la idea. Me gusta que definas safetyDistance como una constante.
    // Es una pena que el if que detecta las tuberías no funciona del todo bien.
    // Entre otras cosas, porque nextPipe.pipeGap no es nada!
    // Pero posiblemente fallen otras cosas. Nunca llega a hacer el salto grande (realmente poner uno jump o 3 no cambia)
    // Tampoco has tenido en cuenta que las tuberías a veces no hay que saltarlas! Pero vaya, bien encaminado.

    if (pipes.length > 0) {
      const nextPipe = pipes[0]; // La primera tubería en el array es la próxima en llegar

      // Evitar colisiones con las tuberías
      if (
        birdData.x < nextPipe.x + nextPipe.pipeWidth &&
        birdData.x + birdData.width > nextPipe.x &&
        (birdData.y < nextPipe.pipeHeight || birdData.y + birdData.height > nextPipe.pipeHeight + nextPipe.pipeGap)
      ) {
        this.jump(3);
        this.jump(3);
        this.jump(3);
        // Salto fuerte para evitar colisión con la tubería
      }
    }

    // Evitar chocar con el suelo o el techo
    if (birdData.y <= this.safetyDistance || birdData.y >= scene.height - scene.floor - this.safetyDistance) {
      this.jump(2); // Salto intermedio para evitar tocar el suelo o el techo
    }
  }
}
