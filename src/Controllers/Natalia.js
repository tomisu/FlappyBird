

export default class NataliaController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Natalia';
  }

  loop(birdData, pipes, scene, dt) {
    /*
    ** This function is called every frame.
    **
    ** 
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */
    const top = scene.height;
    const bot = scene.floor;
    const floorY = scene.height - scene.floor;
    const gapTop = top ? top.pipeHeight             : 0;
    const gapBot = bot ? floorY - bot.pipeHeight    : floorY;
    const mid    = (gapTop + gapBot) / 2;
    const cd = 0;

  
      if (this.cd > 0) {return;} 

      if (birdData.y > floorY - 60) {
      this.jump(3);
    }    
    if (birdData.y > mid) {
        this.jump(2);
        this.cd = 120;
    }

    for (let pipe of pipes){
      if (birdData.y < pipe.pipeHeight){
        this.jump(3);
      }
    }
    
  }
  }

export const color = 0xff00ff;