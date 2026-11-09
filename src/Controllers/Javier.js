

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Javier';
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
    let jumping = false;
    if (birdData.speed > 0) {
      jumping = true;
    } else {
      jumping = false;
    }
    console.log(birdData.speed);
    console.log(pipes[0]);
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);

    }
    if (pipes.length > 0) {
      
      if (birdData.y > scene.floor + pipes[0].pipeHeight - 20 && !pipes[0].isTop && (birdData.x < pipes[0].x + pipes[0].pipeWidth + 20 || birdData.x < pipes[0].x - 20) && Math.abs(birdData.speed) > 2 || birdData.y < scene.floor + 20) {
        this.jump(1);
      }

      /*if (birdData.y > pipes[0].pipeHeight + 10 && !pipes[0].isTop && birdData.speed < 0 && Math.abs(birdData.speed) < 5) {
        this.jump(1);
      }*/
      /*if ((birdData.y > pipes[0].pipeHeight + 10 && !pipes[0].isTop && !jumping && Math.abs(birdData.speed) < 5)) {
        if (birdData.x < pipes[0].x + pipes[0].pipeWidth && birdData.speed < -5) {
          this.jump(1);
        }
        this.jump(1);
      }*/
    }
  }
}

export const color = 0xff00ff;
