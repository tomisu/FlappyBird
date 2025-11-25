export default class IvanCorroController {
  constructor(jump) {
    /*
     ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
     ** The higher the strength, the bigger the jump
     */
    this.jump = jump;
    this.name = "Ivan Corro";
  }

  loop(birdData, pipes, scene, dt) {
    for (let pipe of pipes) {
      if (!pipe.isTop) {
        if (pipe.x < 250 && birdData.y > pipe.pipeHeight) {
          this.jump(1);
        }
      }
    }

    if (birdData.y > scene.height - scene.floor - 20) {
      this.jump(1);
    }
  }
}

export const color = 0x27f568;
