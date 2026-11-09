

export default class TomasController {
  constructor(jump) {

    this.jump = jump;
    this.name = 'Tomás';
  }

  loop(birdData, pipes, scene, dt) {
   
   let t = 0;
       if (pipes[0] !== undefined && dt > 1000) {
    if ( pipes[0].isTop == false) {
      if (pipes[0].x - birdData.x < pipes[0].pipeWidth + 100) {
        this.jump(1);
         t = dt;
      }
    }
  }


    if (birdData.y > scene.height - scene.floor - 120) {
      this.jump(3);
    }
  }
}

export const color = 0xff00ff;
