

export default class UnaiController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Unai';
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

    if (birdData.y > scene.height - scene.floor - 20) {
        this.jump(1);
    }

    for (let i = 0; i < pipes.length; i++) {
      if (pipes[i].x > (birdData.x -200) && pipes[i].x < birdData.x  + 200) {
        console.log(pipes[i].y)
        if (pipes[i].isTop) {
        } else {
            if (birdData.y > (pipes[i].y - 70) && birdData.y < (pipes[i].y + 60) && birdData.y > 60) {
                console.log("Jumping!");
                this.jump(1);
                break;
            }
        }

      }
    }


    return;

  }
}

export const color = 0xff00ff;
