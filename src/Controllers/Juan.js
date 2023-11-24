export default class JuanController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'Juan';
    this.timeElapsed = 0;
  }

  loop(birdData, pipes, scene, dt) {
    // CORRECCIÓN: *snif snif* Huelo un poco a ChatGPTufo. Con comentarios en español, pero...
    // A ver... nada tiene mucho sentido.
    // this.checkPipeTime no está definido, así que todo ese if no vale para nada.
    // Ya me diŕas tú qué por qué findClosestPipe hace cosas como `let closestDistance = Infinity;`.
    // Lo único que realmente funciona es saltar cuando estás a punto de tocar el suelo.
    // No hacía falta irse a ChatGPT ni buscar cosas tan complicadas.
    // Realmente en unas pocas líneas de código puedes tener algo mucho mejor.

    this.timeElapsed += dt / 1000; // Convertimos dt a segundos

    // Definimos las distancias de seguridad para el salto
    const horizontalSafetyDistance = 40;
    const verticalSafetyDistance = 80;

    // Verificamos si ha pasado el tiempo suficiente para comenzar a verificar las tuberías
    if (this.timeElapsed >= this.checkPipeTime && pipes.length > 0) {
      const closestPipe = this.findClosestPipe(birdData, pipes);

      if (closestPipe) {
        const verticalDistanceTop = birdData.y - closestPipe.pipeHeight;
        const verticalDistanceBottom = scene.height - scene.floor - birdData.y;

        // Verificamos si el ave está dentro del rango vertical de la tubería y debe saltar
        if (
          (verticalDistanceTop < verticalSafetyDistance && closestPipe.isTop) ||
          (verticalDistanceBottom < verticalSafetyDistance && !closestPipe.isTop)
        ) {
          this.jump(2); // Salto de fuerza intermedia
        }
      }
    }

    // Verificamos si el ave está demasiado cerca del suelo y debe saltar
    const verticalDistanceToFloor = scene.height - birdData.y - scene.floor;
    if (verticalDistanceToFloor < verticalSafetyDistance) {
      this.jump(2); // Salto de fuerza intermedia para evitar el suelo
    }

    // Salto fuerte para evitar el suelo completamente
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }
  }

  findClosestPipe(birdData, pipes) {
    // Encontrar la tubería más cercana
    let closestPipe = null;
    let closestDistance = Infinity;

    for (const pipe of pipes) {
      const distance = pipe.x - birdData.x;

      if (distance > 0 && distance < closestDistance) {
        closestPipe = pipe;
        closestDistance = distance;
      }
    }

    return closestPipe;
  }
}


