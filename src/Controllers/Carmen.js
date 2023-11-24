export default class CarmenController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'Carmen';
  }

  loop(birdData, pipes, scene, dt) {
    // CORRECCIÓN: No estoy 100% seguro de si ha habido ChatGPT o no... Asumiré que no, pese a los comentarios en inglés.....
    // Está un poco enrevesado. birdCenterY y birdFrontX son cosas que podrías sacar, pero es hilar muy fino. Pero
    // no se deberían calcular sumando la velocidad, si no la anchura del pájaro (cosa que no se os da).
    // El cálculo de pipeInProximity es un poco loco. Y no funcoina demasiado bien.
    // De hecho, nunca se ejecuta la línea dentro de if(pipeInProximty).
    // Además, no tienes en cuenta que las tuberías de arriba no hay que saltarlas!
    // Bueno, cositas. Ya sé qué los cálculos de coordenadas y sprites son complejos.

    const birdCenterY = birdData.y + birdData.speed;
    const birdFrontX = birdData.x + birdData.speed;

    // Check if there is a pipe in the bird's path
    const pipeInProximity = pipes.some(pipe => {
      const pipeTopY = pipe.isTop ? pipe.y - scene.floor : pipe.y;
      const pipeBottomY = pipe.isTop ? pipe.y + pipe.pipeHeight - scene.floor : pipe.y + pipe.pipeHeight;
      const pipeFrontX = pipe.x;

      // Check if the bird's path intersects with the pipe and the pipe is close enough
      return (
        birdFrontX < pipeFrontX + pipe.pipeWidth &&
        birdFrontX > pipeFrontX &&
        birdCenterY > pipeTopY &&
        birdCenterY < pipeBottomY &&
        Math.abs(birdFrontX - pipeFrontX) < 2
      );
    });

    // Always jump when the bird is close to the ground or there is a pipe in the path
    if (birdData.y > scene.height - scene.floor - 10) {
      const jumpStrength = 3; // You can adjust this as needed
      this.jump(jumpStrength);
    }

    // Jump if there is a pipe in proximity
    if (pipeInProximity) {
      const jumpStrength = 3; // You can adjust this as needed
      this.jump(jumpStrength);
    }
  }
}

export const color = 0xFAD5FF;

