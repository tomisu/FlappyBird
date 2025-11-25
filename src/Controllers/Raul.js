

export default class RaulController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Raul';
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

    // Encuentra la tuberia que mas cerca esta 
    const nextPipe = pipes.find(pipe => pipe.x + pipe.pipeWidth > birdData.x);

    if (nextPipe) {
      // Encontrar los tubos(ya sean de arriba abajo)
      const topPipe = pipes.find(pipe => pipe.x === nextPipe.x && pipe.isTop);
      const bottomPipe = pipes.find(pipe => pipe.x === nextPipe.x && !pipe.isTop);

      // Calcular el centro del hueco entre tubos
      let gapTop = 0;
      let gapBottom = scene.height - scene.floor;
      
      if (topPipe) {
        gapTop = topPipe.pipeHeight;
      }
      if (bottomPipe) {
        gapBottom = scene.height - bottomPipe.pipeHeight - scene.floor;
      }

      const gapCenter = (gapTop + gapBottom) / 2;

      // Si el pájaro está por debajo del centro del hueco que salte
      if (birdData.y > gapCenter + 20) {
        this.jump(1);
      }

      // Si está cayendo muy rápido que salte mas fuerte
      if (birdData.y > gapCenter + 50 && birdData.speed > 2) {
        this.jump(2);
      }
    }

    // Evitar chocar con el suelo
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }
  }
}

export const color = 0xff00ff;
