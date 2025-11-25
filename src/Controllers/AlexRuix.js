

export default class AlexFullController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'alex';
  }

  loop(birdData, pipes, scene, dt) {
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(2);
      return;
    }

    if (birdData.y < 60) {
      return;
    }

    let nextPipe = null;
    for (const pipe of pipes) {
      if (pipe.x + pipe.pipeWidth > birdData.x) {
        if (!nextPipe || pipe.x < nextPipe.x) {
          nextPipe = pipe;
        }
      }
    }

    if (nextPipe) {
      let gapTop = nextPipe.isTop ? nextPipe.pipeHeight : 0;
      let gapBottom = nextPipe.isTop ? scene.height - scene.floor : nextPipe.pipeHeight + nextPipe.pipeWidth;
      let gapCenter = gapTop + (gapBottom - gapTop) / 2;

      if (birdData.y > gapCenter + 15 && birdData.speed > 0) {
        this.jump(1);
      }
      else if (birdData.y > gapCenter + 40 && birdData.speed > 2) {
        this.jump(2);
      }
    }
  }
}

export const color = 0x0;
