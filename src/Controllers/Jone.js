

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Jone';
  }

  pipes_length = 0;



  

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

    if (birdData.y > scene.height - scene.floor - 15) {
      this.jump(1);
    }
    // if (pipes.length()> this.pipes_length){
    //   this.pipes_length = pipes.length();
    //   Pipe = pipes[-1];
    // }
    if (pipes.length !== 0){
      // if(pipes[0].isTop){ //Si en pipe esta arriba
      //   if(birdData.y > (scene.height - scene.floor + pipes[0].pipeHeight + 0)){
      //     this.jump(1);
      //   }
      // }
      if(!pipes[0].isTop){ // Si el pipe esta abajo
        // if(pipes.length == 2){
        //   if(!pipes[1].isTop){
        //     if(birdData.y > (scene.height - scene.floor - Math.max(pipes[0].pipeHeight,pipes[1].pipeHeight))){
        //       if(birdData.x<300){
        //         console.log("cerca")
        //         this.jump(3);
        //       }else{
        //         this.jump(1);
        //       }
        //       this.jump(1);
        //     }
        //   }
        // }

       
          if(birdData.y > (scene.height - scene.floor - pipes[0].pipeHeight)){
            if(birdData.x<500){
              console.log("cerca")
              this.jump(1);
            }else{
              this.jump(1);
            }

          }
        


      }
    }

  }
}

export const color = 0xff00ff;
