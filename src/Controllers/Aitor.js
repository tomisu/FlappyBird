import Pipe from "../Pipes/Pipe";


export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Aitor';
    this.canJump = true;
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
      this.jump(3);
      for (const pipe of pipes) {
        if (birdData.x - pipe.x < 1 && this.canJump) {

          this.jump(2);

          this.canJump = false;
          setTimeout(() => {
            this.canJump = true;
          }, 1200);
        }
      }
    }






  }
}
