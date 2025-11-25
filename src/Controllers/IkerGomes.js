export default class IkerGomesController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'vinijr';
  }

  loop(birdData, pipes, scene, dt) {
    let floorPosition = scene.height - scene.floor;
    let distanceToFloor = floorPosition - birdData.y;
    
    if (distanceToFloor < 50) {  
      this.jump(3);  
      return;  
    }

    let nextPipe = null;
    for (let i = 0; i < pipes.length; i++) {
      if (pipes[i].x + pipes[i].pipeWidth > birdData.x) {
        nextPipe = pipes[i];
        break;
      }
    }
    
    if (!nextPipe) {
      let centerHeight = scene.height / 2;
      if (birdData.y > centerHeight) {
        this.jump(2);
      }
      return;
    }
    
    let topPipe = null;
    let bottomPipe = null;

    for (let pipe of pipes) {
      if (pipe.x === nextPipe.x) {
        if (pipe.isTop) {
          topPipe = pipe;
        } else {
          bottomPipe = pipe;
        }
      }
    }

    if (topPipe && bottomPipe) {
      let gapTop = topPipe.pipeHeight;
      let gapBottom = scene.height - bottomPipe.pipeHeight - scene.floor;  
      let gapCenter = (gapTop + gapBottom) / 2;  
      
      let adjustment = birdData.speed > 0 ? 15 : 5;
      
      if (birdData.y > gapCenter - adjustment) {  
        this.jump(2);
      }
    }
  }
}

export const color = 0xff00ff;
