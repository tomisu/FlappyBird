

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'José Mari';
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

    var cosa = this;
    document.addEventListener('keydown', function(event) {
      if(event.code == 'Space') {
        cosa.jump(2);
      } else if (event.code == 'Enter') {
        cosa.jump(1);
      }
    });
  }
}

export const color = 0xff00cc;
