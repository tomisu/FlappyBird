

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
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */

    // CORRECCIÓN: MUY BIEN!
    // Muy buen trabajo mirando si estás cerca de la tubería SOLO si es una tubería del suelo.
    // Muy bien hecho en separar las 2 condiciones de salto y meterlas en el if. Así lo entiendo bien.
    // Buen uso de `some`!
    // Creo que la condición del some podría ser mejorable para dar mejores resultados. Pero eso ya es muy extra.
    // Merecido premio. Disfrútalo!

    const nearGround = birdData.y > scene.height - scene.floor - 10;

    const nearPipeOnGround = pipes.some(pipe =>
      !pipe.isTop &&
      birdData.x > pipe.x - 30 &&
      birdData.x < pipe.x + pipe.pipeWidth &&
      birdData.y > scene.height - pipe.pipeHeight - scene.floor - 10
    );

    if (nearGround || nearPipeOnGround) {
      this.jump(3);
    }
  }
}

export const color = 0xF3E5AB;
