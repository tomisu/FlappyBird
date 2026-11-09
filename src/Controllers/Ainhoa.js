export default class AinhaController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Ainhoa';
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
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(2); // Evitar suelo
      }
    for (let i = 0; i < pipes.length; i++) {
      
      const pipe = pipes[i];
        if (pipe.isTop) {
          if (birdData.y < pipe.pipeHeight + 6 && birdData.x < pipe.x +5) {
            this.jump(1); // Evitar colision con tuberia superior
          }
        } else {
          if (birdData.y > pipe.pipeHeight - 6 && birdData.x < pipe.x +5) {
            this.jump(1); // Evitar colision con tuberia inferior
          }
        }
        break;
      }
    }
}

export const color = 0xff00ff;
