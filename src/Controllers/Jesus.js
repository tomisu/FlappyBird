

export default class JesusController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Jesús';
    this.pipe_pos = 0;

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

    if (pipes.length>0) {
      console.log(600-birdData.y, pipes[0].pipeHeight)
      if (600 - birdData.y > pipes[this.pipe_pos].pipeHeight-50 && !pipes[this.pipe_pos].isTop){
        if(600-birdData.y < pipes[0].pipeHeight+50){
          this.jump(3);
        }
        
      }
      if (birdData.x > pipes[this.pipe_pos].x + pipes[this.pipe_pos].pipeWidth) {
        this.pipe_pos = this.pipe_pos ;
      }
    }

  }
}

export const color = 0xff00ff;
