export default class AncizuController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Ancizu';
  }

  loop(birdData, pipes, scene, dt) {
    
    /* This function is called every frame.
    birdData = {x: int, y: int, speed: int }
    pipes = array of Pipe  
    Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    scene: {width: 800, height: 600, floor: int (the floor height)}
    dt: milliseconds elapsed since last update */
    
    if ((birdData.y > scene.height - scene.floor - 10) || (birdData.x < pipes[0]?.x - pipes[0]?.pipeWidth - 5 && pipes[0]?.isTop == false)) {
      this.jump(3);
      //this.jump(pipes[0]?.pipeHeight);
    }
  }
}

export const color = 0xff00ff;
