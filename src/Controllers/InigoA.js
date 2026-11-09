

export default class InigoAController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'InigoA';
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
   
/*
   Map(pipes, (pipe) => {
    if (pipe.x < birdData.x + 50 && pipe.x > birdData.x - 50) {
      if (!pipe.isTop && birdData.y > pipe.pipeHeight + 10) {
        this.jump(2);
      }
    }});
 */  
  /*
    pipes.foreach((pipe) => {
      if (pipe.x < birdData.x + 50 && pipe.x > birdData.x - 50) {
        if (!pipe.isTop && birdData.y < pipe.pipeHeight + 10) {
          this.jump(1);
        }
      }
    });*/

    pipes.forEach((pipe) => {
      if (pipe.x < birdData.x + 120 && pipe.x > birdData.x - 20) {
        if (!pipe.isTop) {
          if(birdData.y < pipe.pipeHeight +300 && dt > 3) {
            this.jump(1);
          }
        }
      }
    });



    if (birdData.y > scene.height - scene.floor - 40) {
     this.jump(2);
    }
  }
}

export const color = 0xff00ff;
