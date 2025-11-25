export default class IAController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'IAk';
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
    if (birdData.y > scene.height - scene.floor - 60) {
      this.jump(2);
    }
    if (pipes.length === 0) {
      return;
    }
    const validPipes = pipes.filter(pipe => pipe.x > birdData.x);
    const pipe = validPipes.length > 0 ? validPipes[0] : null;
    if ((pipe !== null || pipe?.isTop) || birdData?.y < 50) {
      return;
    }
    if (pipe !== null && ((birdData.y) - scene.floor - pipe.pipeHeight) > 30) {
      this.jump(3);
    }
    if (pipe !== null && pipe.x - birdData.x < 13) {
      /*if (((birdData.y) - scene.floor - pipe.pipeHeight) > 30) {
        this.jump(3);
      }
      else if (((birdData.y) - scene.floor - pipe.pipeHeight) > 20) {
        this.jump(2);
      }
      else {
        this.jump(1);
      }*/
      this.jump(2);
    }
  }
}

export const color = 0x178A8A;
