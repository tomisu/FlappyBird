
const JUMP_HEIGHT = 150;  // Aproximación de la altura de un salto.
const BOTTOM_SAFETY = 50;  // Salvaguarda para no colisionar por debajo.
const COLUMN_SAFETY = 50;  // Ancho extra que le damos a las columnas, para no colisionar.


export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Tomás';
  }


  getLevel(birdData, pipes, scene) {
    /*
    ** Calcula cuál es el nivel Y óptimo para el pájaro
    */
    let levelToMaintain;

    const nextPipe = pipes.find(p => p.x + p.pipeWidth + COLUMN_SAFETY > birdData.x);
    if (nextPipe) {
      // Hay tuberías, mantener el nivel adecuado según si son del techo o del suelo.
      if (nextPipe.isTop) {
        levelToMaintain = nextPipe.pipeHeight + JUMP_HEIGHT;
      } else {
        levelToMaintain = scene.height - nextPipe.pipeHeight - BOTTOM_SAFETY;
      }
    } else {
      // No hay tuberías. Quedarse a mitad.
      const baseLevel = scene.height / 2 + JUMP_HEIGHT / 2;
      levelToMaintain = baseLevel;
    }

    // Asegurar que el nivel a mantener está por encima del suelo.
    const minLevel = scene.height - scene.floor - BOTTOM_SAFETY;
    return Math.min(levelToMaintain, minLevel);
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

    const levelToMaintain = this.getLevel(birdData, pipes, scene);

    // Si baja del nivel, salta.
    if (birdData.y > levelToMaintain) {
      this.jump(1);
    }
  }
}

export const color = 0x00ff00;
