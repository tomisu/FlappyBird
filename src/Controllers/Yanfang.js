

export default class YanfangController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Yanfang';
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
      // CORRECCIÓN: Esta parte no tiene sentido dentro del If.
      //  El if está bien para hacer un salto para no tocar el suelo.
      //  Pero el salto de las tuberías no depende de si estás cerca del suelo.
      //  Además, saltas para todas las tuberías! Las del techo no hay que saltarlas.
      //  Pero bien, es un buen intento :)
      const nextPipe = pipes.find(pipe => pipe.x > birdData.x);
      console.log(nextPipe);

      // If there is a next pipe and it's too close, perform a jump
      if (nextPipe && nextPipe.x - birdData.x < 100) {
        birdData.y = 100;
        this.jump(3);
      } else {
        this.jump(3);
      }
    };
  }
}
