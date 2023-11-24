

export default class CasajusController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Casajús';
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

    // CORRECCIÓN: No es una mala táctica, quedarse más o menos en el medio.
    //  Sin embargo, no tiene en cuenta las tuberías y por eso a veces falla.
    //  Me gusta la simpleza ante un problema complejo.
    //  No es perfecto (ni mucho menos), pero ha tenido mejor resultado que otros,
    //  y la complejidad es muchísimo menor.
    if (birdData.y > scene.height - scene.floor - 225) {
      this.jump(1);
    }
  }
}
