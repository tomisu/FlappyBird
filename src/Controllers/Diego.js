export default class DiegoController {
  constructor(jump) {
    /*
     ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
     ** The higher the strength, the bigger the jump
     */
    this.jump = jump;
    this.name = 'Diego';
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

    // CORRECCIÓN: Muy bien. No tenías una idea mala. La ejecución se ha embrollado un poco.
    // Hay un poco inferno de ifs con mil condiciones locas. En este caso suele ser mejor
    // sacar las condiciones en variables, para que se entienda un poco más.
    // Y quizá usar más breaks o returns para que el flujo no sea tan anidado.
    // Pero veo que además tienes en cuenta si la columna es de suelo o no.
    // En general, muy bien. Se nota el esfuerzo.

    // Detalle: ojo al birdData.y < 100. No quieres saltar en ese caso!
    if (birdData.y > scene.height - scene.floor - 100 || birdData.y < 100) {
      this.jump(1);
    }
    const middleOfScreen = scene.height / 2;


    if (birdData.y > middleOfScreen) {
      pipes.forEach((pipe, index) => {
        const safeDistance = 60;
        const birdWidth = 60;

        if (
          (birdData.x + birdWidth > pipe.x && birdData.x < pipe.x + pipe.pipeWidth) ||
          (index < pipes.length - 1 &&
            birdData.x + birdWidth > pipes[index + 1].x &&
            birdData.x < pipes[index + 1].x + pipes[index + 1].pipeWidth)
        ) {
          if (
            (birdData.y < pipe.pipeHeight + safeDistance && pipe.isTop) ||
            (birdData.y > scene.height - scene.floor - pipe.pipeHeight - safeDistance && !pipe.isTop) ||
            (index < pipes.length - 1 &&
              birdData.y < pipes[index + 1].pipeHeight + safeDistance &&
              pipes[index + 1].isTop) ||
            (index < pipes.length - 1 &&
              birdData.y > scene.height - scene.floor - pipes[index + 1].pipeHeight - safeDistance &&
              !pipes[index + 1].isTop)
          ) {
            if (pipe.isTop || (index < pipes.length - 1 && pipes[index + 1].isTop)) {
              this.jump(1);
            } else {
              this.jump(2);
            }
          }
        }
      });
    }
  }
}