

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'anas';

    

  loop(birdData, pipes, scene, dt) {

    // Posición vertical del pájaro
    const birdY = birdData.y;
    // Si el pájaro está demasiado abajo
    if (birdY > suelo - 80) {
      this.jump(3);
    }

  }
}

export const color = 0x00ff00;

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
      this.jump(3);
    }
  }
}

export const color = 0xff00ff;
