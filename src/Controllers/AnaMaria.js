

export default class AnaMariaController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Ana Maria';
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
    if (birdData.y == 0  )  { 
      this.jump(1);
      console.log("Salto");
    }
    else if (birdData.y < scene.height - scene.floor ) {  //Antes de que toque el suelo el pájaro salta
      this.jump(1);
      console.log("Salto");
    }
    else if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
      console.log("Salto");
    }
  }
}
export const color = 0xffff00;
