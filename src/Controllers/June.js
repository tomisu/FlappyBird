

export default class JuneController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'June';
  }

  loop(birdData, pipes, scene, dt) {
    if (birdData.y > scene.height - scene.floor-10){
        this.jump(3);
    }
    const pipe = pipes.find (p => !p.isTop && p.x> birdData.x);
    if (pipe) {
        if (birdData.y> pipe.pipeHeight +50){
            this.jump(3);
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

    //if (birdData.y > scene.height - scene.floor - 10) {
    //  this.jump(3);
    //}
  }
}

export const color = 0xff00ff;
