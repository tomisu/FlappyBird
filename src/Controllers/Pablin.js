

export default class PabloController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Pablin';
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
    
    // Evitar el suelo
    if (birdData.y > scene.height - scene.floor - 30) {
      this.jump(3);
    }

    // Evitar el techo
    if (birdData.y < 30) {
      return; 
    }

    // Encontrar la tubería más cercana por delante
    const nextPipe = this.getNextPipe(birdData, pipes);
    
    if (!nextPipe) {
      // Si no hay tuberías, mantener el pájaro en el centro
      if (birdData.y > scene.height / 2) {
        this.jump(1);
      }
      return;
    }

    // Calcular el centro del hueco de la tubería
    const gapCenter = this.getGapCenter(nextPipe, pipes, scene);
    console.log('Gap center at y=', gapCenter);
    // Distancia horizontal al siguiente tubo
    const distanceToPipe = nextPipe.x - birdData.x;
    
    // Decidir si saltar o no
    const heightDifference = birdData.y - gapCenter;
    
    // Si estamos por debajo del centro salta
    if (heightDifference > 10) {
      // Ajustar fuerza según qué tan lejos estemos
      if (heightDifference > 100) {
        this.jump(3);
      } else if (heightDifference > 50) {
        this.jump(2);
      } else {
        this.jump(1);
      }
    }
    // Si estamos muy cerca de la tubería y aún por debajo, saltar con urgencia
    else if (distanceToPipe < 100 && heightDifference > +100) {
      this.jump(2);
    }
  }

  getNextPipe(birdData, pipes) {
    // Filtrar solo tuberías que están adelante del pájaro
    const pipesAhead = [];
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      if (pipe.x + pipe.pipeWidth > birdData.x) {
        pipesAhead.push(pipe);
      }
    }  
    // Encontrar la tubería superior más cercana
    let topPipes = [];
    for (let i = 0; i < pipesAhead.length; i++) {
      if (pipesAhead[i].isTop) {
        topPipes.push(pipesAhead[i]);
      }
    }  
    // Devolver la más cercana
    let nextPipe = null;
    let minDistance = Infinity;
    for (let i = 0; i < topPipes.length; i++) {
      const distance = topPipes[i].x - birdData.x;
      if (distance < minDistance) {
        minDistance = distance;
        nextPipe = topPipes[i];
      }
    }  
    return nextPipe;
  }

  getGapCenter(topPipe, pipes, scene) {
    // Encontrar la tubería inferior correspondiente
    const bottomPipe = pipes.find(function(pipe) {
      return !pipe.isTop && pipe.x == topPipe.x;
    });  
    if (!bottomPipe) {
      // Si no hay tubería inferior, estimar el centro
      return scene.height / 2;
    }
    
    // Calcular 
    const altura = topPipe.pipeHeight;
    const bottomEdge = scene.height - bottomPipe.pipeHeight - scene.floor;
    
    return (altura + bottomEdge) / 2;
    
  }

  
}

export const color = 0xff00ff;
