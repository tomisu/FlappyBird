

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Tomás';
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
   let t = 0;
       if (pipes[0] !== undefined && dt > 1000) {
    if ( pipes[0].isTop == false) {
      if (pipes[0].x - birdData.x < pipes[0].pipeWidth + 20) {
        this.jump(1);
         t = dt;
      }
    }
  }


    if (birdData.y > scene.height - scene.floor - 120) {
      this.jump(3);
    }
  }
}

export const color = 0xff00ff;
