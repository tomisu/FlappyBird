export default class IAController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'IAlkorta';
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

    if (birdData.y > scene.height - scene.floor - 70) {
      this.jump(3);
    }
    let next_pipe = pipes[0];
    let second_pipe = pipes[0];
    let pipes_nuevo
    if(next_pipe == null){
      return;
    
    }

    pipes_nuevo = pipes.filter(pipe=>pipe.x>(birdData.x-150) && !pipe.isTop)
    next_pipe =pipes_nuevo[0]
    if(pipes_nuevo[1] != null){
    second_pipe =pipes_nuevo[1]}
    if(next_pipe == null){
      return;
    
    }


    if(scene.height - next_pipe.pipeHeight < birdData.y +60 &&  !next_pipe.isTop && next_pipe.x-birdData.x < 200){
      this.jump(1);
      console.log("salto grande")
      
    }
    if(second_pipe == null){
      this.jump(3)
      return;
    
    }
    if(second_pipe.height > next_pipe.height){
      this.jump(2);
    }

 
   
   
  }
}

export const color = 0x000000;
