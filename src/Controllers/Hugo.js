export default class HugoController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Hugo';
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

    // 1. Evitar tocar el suelo
    if (birdData.y > scene.height - scene.floor - 50) {
      this.jump(1);
      return;
    }

    // 2. Buscar la tubería más cercana
    const upcomingPipes = pipes.filter(p => p.x + p.pipeWidth > birdData.x);

    if (upcomingPipes.length > 0) {
      const nextPipe = upcomingPipes[0];

      // Si la tubería está cerca (a menos de 225px)
      if (nextPipe.x - birdData.x < 225) {
        
        // Si la tubería viene de abajo (!isTop), tenemos que estar por encima de ella
        if (!nextPipe.isTop) {
          if (birdData.y > nextPipe.y - 100) {
            this.jump(1);
          }
        }
        // Si la tubería viene de arriba (isTop), tenemos que estar por debajo de ella
        else {
        }
      }
    }
  }
}

export const color = 0xffffff;