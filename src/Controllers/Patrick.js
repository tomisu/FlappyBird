

export default class PatrickController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Patrick';

    //Cada vez que se pulsa sobre el espacio se quiere conseguir un salto
    //document.addEventListener("keydown", (event) => {
    // if (event.code === "Space") {
    //    this.jump(2); // salto fuerza 2
    //  }
    //});
  }

  getPipe(birdData, pipes) {
    //retornar la tuberia mas cercana al pajaro
    const pipe = pipes.find(pipe => pipe.x > birdData.x);
    return pipe;
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
      this.jump(3); //si el pajaro esta por debajo del suelo salto fuerte
    }

    const pipe = this.getPipe(birdData, pipes);
    if (!pipe) {
      //si no hay tuberias mantendré una altura media
      if (birdData.y > scene.height / 2) {
        this.jump(2);
        console.log('jumping middle');
      }
      return;
    }

    //si la tuberia es inferior pero no esta en el camino, seguir en la altura que esta el pajaro
    if (!pipe.isTop) {
      //si el pipe tiene altura absoluta pipe.pipeHeight, tendre en cuenta en vez de scene.height/2
      if (birdData.y > scene.height - pipe.pipeHeight && (pipe.x - birdData.x < 300 || birdData.x >= pipe.x)) {
        this.jump(3);
        console.log('jumping bottom');
      }
      //this.jump(1);
      if (birdData.x >= pipe.x && birdData.y > scene.height / 2) {
        this.jump(3);
        console.log('jumping middle');
      }
      return;
    }
    //si la tuberia es superior pero no esta en el camino, seguir en la altura que esta el pajaro
    if (pipe.isTop) {
      console.log('pipe is top');
      //tengo que manetner la altura que tiene el pajaro
      if (birdData.y < pipe.pipeHeight) {
        //this.jump(1);
        console.log('dont jump top');
      }
      return;
    }


  }
}

export const color = 0xe30052;
