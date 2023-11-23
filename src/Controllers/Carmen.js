export default class TomasController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'Carmen';
  }

  loop(birdData, pipes, scene, dt) {
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

