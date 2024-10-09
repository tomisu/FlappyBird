

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Guillermo';
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

   
    if(pipes[0] != undefined){

      if ((birdData.y > scene.height - scene.floor - pipes[0].pipeHeight) && !pipes[0].isTop) {
        
        this.jump(2);
        

      }else {
        if (birdData.y > scene.height - scene.floor - 15) {
          this.jump(2);
        
        }
      }
    }else{
      if (birdData.y > scene.height - scene.floor - 5) {
        this.jump(1);
      
      }
    }

    /*
    if (birdData.y > scene.height - scene.floor - 150) {
      this.jump(3);
    
    }
      */
  }
}

export const color = 0xff00ff;
