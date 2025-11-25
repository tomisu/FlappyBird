

export default class CarlosController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'CarlosCalvo';
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
    
  
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(1);
    }
    for (let pipe of pipes) {

      if ((pipe.x > 200 && pipe.isTop==false) && birdData.y > scene.height - scene.floor - 90){
       this.jump(2);
    
      }

    }
    
  

  }
}

export const color = 0xC418AA;
