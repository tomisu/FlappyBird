import Pipe from "../Pipes/Pipe";


export default class AitorController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Aitor';
    this.canJump = true;
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

    // CORRECCIÓN: Una estategia interesante.
    // Entiendo que el timeout es para evitar saltar 100 veces seguidas y morir con el techo.
    // Pero claro, tiene sus problemas.
    // El for, debería estar fuera del if de comprobación del suelo!!
    // Incluso sacándolo, al no tener en cuenta la posición del pájaro (y), a veces
    // salta demasiado.
    // Pero bueno, no es un mal intento.


    if (birdData.y > scene.height - scene.floor - 60) {
      this.jump(3);
      for (const pipe of pipes) {
        if (birdData.x - pipe.x < 1 && this.canJump) {

          this.jump(2);

          this.canJump = false;
          setTimeout(() => {
            this.canJump = true;
          }, 1200);
        }
      }
    }






  }
}
