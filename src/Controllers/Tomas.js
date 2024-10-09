

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump.
    */
    this.jump = jump;
    this.name = 'Iñigo';
  }

  loop(birdData, pipes, scene, dt) {
    /*
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */

    // Detectar la tubería más cercana
    let nearestPipe = null;
    let nearestDistance = Infinity;

    pipes.forEach(pipe => {
      // Solo nos importan las tuberías que están frente al pájaro
      if (pipe.x > birdData.x && (pipe.x - birdData.x) < nearestDistance) {
        nearestDistance = pipe.x - birdData.x;
        nearestPipe = pipe;
      }
    });

    if (nearestPipe) {
      const pipeGap = 150; // Supón que el espacio entre tuberías (gap) es de 100 unidades
      const safeZone = pipeGap / 2.3;  // Zona segura para pasar entre las tuberías
      const pipeTopY = nearestPipe.isTop ? nearestPipe.pipeHeight : scene.height - nearestPipe.pipeHeight;

      // Si el pájaro está cerca de la tubería (horizontalmente)
      if (nearestDistance < 90) {
        // Ver si la tubería es la superior y el pájaro está por debajo de la apertura
        if (nearestPipe.isTop && birdData.y < nearestPipe.pipeHeight + safeZone) {
          this.jump(2);  // Salta si el pájaro está demasiado bajo
        }
        // Ver si la tubería es la inferior y el pájaro está por encima de la apertura
        if (!nearestPipe.isTop && birdData.y > scene.height - nearestPipe.pipeHeight - safeZone) {
          this.jump(2);  // Salta si el pájaro está demasiado alto
        }
      }

      // Nueva condición: si el pájaro está justo encima de la tubería, salta
      const distanceAbovePipe = birdData.y - pipeTopY;
      if (distanceAbovePipe > 10 && distanceAbovePipe < 20) {  // Ajusta '20' según sea necesario
        this.jump(2);  // Salta con menor fuerza si está justo encima de la tubería
        
      }
    }

    // Verifica si el pájaro está cerca del suelo
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(2);  // Salta con más fuerza si está muy cerca del suelo
    }
  }
}

export const color = 0xff00ff;


