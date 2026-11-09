

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */


    this.jump = jump;
    this.name = 'Ahechu';
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
        this.jump(1);
    }

    let primera = null;

    for (let pipe of pipes) {
        if (pipe.isTop || pipe.x + pipe.pipeWidth < birdData.x) {
            continue;
        }
        if (primera == null || pipe.x < primera.x) {
            primera = pipe;
        }
    }
    
    if (primera != null) {
        if (primera.x - birdData.x < 200 && primera.pipeHeight < birdData.y) {
            this.jump(1);
        }
    }
}
}

export const color = 0xff00ff;
