export default class JulenController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Julen';
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
      this.jump(3);
    }

    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      const gapX = pipe.x - birdData.x;

      if (gapX > 0 && gapX < 90) {
        if (pipe.isTop === false) {
          const gapY = scene.height - pipe.pipeHeight;
          if (birdData.y > gapY - 35) {
            this.jump(2);
          }
        }
      }
    }
  }
}

export const color = 0xff00ff;