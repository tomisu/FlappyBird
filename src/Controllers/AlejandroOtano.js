

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Alejandro';
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
   

    let tuboProximo = null;
    for (let i = 0; i < pipes.length; i++) {
      if (pipes[i].x > birdData.x) {
        tuboProximo = pipes[i];
        break;
      }
    }
    
    if (tuboProximo) {

      if (tuboProximo.isTop) {

        let espacioArriba = tuboProximo.y + tuboProximo.pipeHeight + 20;
        if (birdData.y < espacioArriba + 30) {
  
        } else {
          this.jump(2);
        }
      } else {

        if (birdData.y > tuboProximo.y - 50) {
          this.jump(2);
        }
      }
    }
    

    if (birdData.y > scene.height - scene.floor -9) {
      this.jump(2);
    }
  }
}





