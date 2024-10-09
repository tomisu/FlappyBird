import Pipe from "../Pipes/Pipe";


export default class MikelController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Mikel';
  }

  loop(birdData, pipes, scene, dt) {
    for (let i = 0; i < pipes.length; i++) {  // Corregido pipes.length y inicialización de i
      let tuberia = pipes[i];  // pipes[i] en lugar de Pipe[i]
      if (tuberia.x - 20 > birdData.x) {
        if (tuberia.y < birdData.y) {
          if (tuberia.pipeHeight + 20 > birdData.y) {
            if (tuberia.pipeHeight + 70 < birdData.y) {
              console.log("salto")
              this.jump(1);
            }
            if (tuberia.pipeHeight + 70 > birdData.y) {
              console.log("nosalto")
            }
          }
        }
      }

    }

    /*
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */

    if (birdData.y > scene.height - scene.floor - 170) {
      this.jump(1);
    }
  }
}

export const color = 0xff00ff;
