

export default class AdrianController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Adrian';
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
    if(pipes[0]!=null){
      if(pipes[0].isTop && birdData.x < pipes[0].x  - 100 && birdData.y > pipes[0].pipeHeight - 120)
    
      if(birdData.x < pipes[0].x  - 100 && birdData.y > pipes[0].pipeHeight + 120){
        this.jump(1);
      }
     
      }
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }
    
    
    /*
    console.log('birdData.x'+ birdData.x);
    console.log('birdData.y'+ birdData.y);
    console.log('pipes[0].x'+ pipes[0].x);
    console.log('pipes[0].y'+ pipes[0].y);
    */
  }
}

export const color = 0xff00ff;
