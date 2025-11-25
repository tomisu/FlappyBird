

export default class AneLiController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Ane Li';
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
        
        // Evitar suelo
        if (birdData.y > scene.height - scene.floor - 100) {
            this.jump(1);
        }

        // Evitar techo
        if (birdData.y < 30) {
            return;  // No saltar, dejar que caiga
        }

        // Esquivar pipes
        if (pipes.length > 0) {
            // Encontrar pipe mas cercana
            let nextPipe = null;
            for (let pipe of pipes) {
                if (pipe.x + pipe.pipeWidth > birdData.x) {
                    nextPipe = pipe;
                    break;
                }
            }

            if (nextPipe) {
                const pipeDistance = nextPipe.x - birdData.x;
                const margin = 50; // Margen de seguridad
                
                if (pipeDistance < 120 && pipeDistance > -40) {
                    if (nextPipe.isTop) {
                        // Pipe desde arriba
                        const pipeBottom = nextPipe.pipeHeight;
                        if (birdData.y < pipeBottom + margin) {
                            return;
                        }
                    } else {
                        // Pipe desde abajo
                        const pipeTop = scene.height - nextPipe.pipeHeight;
                        if (birdData.y > pipeTop - margin) {
                            this.jump(3);
                        }
                    }
                }
            }
        }       
    }
}

export const color = '#c807d9ff'; 
