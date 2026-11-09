
export default class AngelController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Guti';
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
    const groundY = scene.height - scene.floor; // 550: altura del suelo
    const MARGIN = 45; // margen por el tamaño del pájaro

    // 1. Tubo más cercano que todavía no hemos pasado
    let next = null;
    for (const pipe of pipes) {
      if (pipe.x + pipe.pipeWidth < birdData.x) continue; // ya está detrás
      if (next === null || pipe.x < next.x) next = pipe;
    }

    // 2. Altura objetivo según el tipo de tubo
    let minY = MARGIN;
    let target = scene.height / 2; // sin tubos: volar a media altura

    if (next) {
      if (next.isTop) {
        // Tubo que cuelga de arriba: hay que pasar por DEBAJO
        minY = next.pipeHeight + MARGIN;
        target = groundY - 10; // volar bajo para no tocarlo al saltar
      } else {
        // Tubo que sale de abajo: hay que pasar por ENCIMA
        const maxY = scene.height - next.pipeHeight - MARGIN;
        target = Math.min(maxY - 20, 330);
      }
    }

    // 3. Predecir dónde va a estar el pájaro
    const gravity = 0.01 * dt;
    const climbing = next && !next.isTop;
    const projectedY = (climbing && birdData.speed < 0)
      ? birdData.y - (birdData.speed * birdData.speed) / (2 * gravity) // hasta dónde subiría
      : birdData.y + birdData.speed; // posición en el siguiente frame

    // 4. Saltar solo si hace falta; si no, no hacer nada
    if (projectedY > target) {
      const error = projectedY - target;

      let strength = 1;
      if (error > 90) strength = 3;
      else if (error > 40) strength = 2;

      // Si el salto nos metería en el tubo de arriba, usar el más suave
      const rise = strength === 3 ? 200 : strength === 2 ? 155 : 115;
      if (birdData.y - rise < minY) strength = 1;

      this.jump(strength);
    }
  }
}

export const color = 0xff00ff;
