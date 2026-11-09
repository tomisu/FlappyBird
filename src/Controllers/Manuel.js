

export default class ManuelController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Manuel';
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

    let i = pipes.findIndex(pipe => pipe.x > birdData.x);
    let nextPipe = pipes[i];
    let jumped = false;
    //Salta si va a tocar el suelo
    if (birdData.y > scene.height - scene.floor - 10) {
      console.log("salto de tomas");
      this.jump(3);
    }
    if(birdData.y  > scene.height - scene.floor - 50){
      console.log("no salto");
      jumped = false;
    }
    else if(nextPipe && !jumped){

      if(!nextPipe.isTop &&birdData.x > nextPipe.x - 120 && birdData.x< nextPipe.x + nextPipe.pipeWidth ){
      
           this.jump(1);
           jumped = true;
          console.log("Salto grande");

        }else{
          console.log("No salto");
          jumped = false;
        }
      }
    
    }
    }
  


export const color = 0xff00ff;
