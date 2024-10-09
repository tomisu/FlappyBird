

export default class TomasController {
    constructor(jump) {
      /*
      ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
      ** The higher the strength, the bigger the jump
      */
      this.jump = jump;
      this.name = 'Asier';
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
  
      



      
      /*if (pipe.position.x == birdData.x+100){
        thisjump(3);
    
      }*/
     /*if (pipes){
        pipes.forEach(pipe => {
            // Solo considerar las tuberías superiores
            if (pipe.isTop) {
                if (200 < pipe.position.x  < 250) {
                    // Si el pájaro está por debajo de la tubería superior, salta
                }
                else if(birdData.y > scene.height - scene.floor - 80) {
                    this.jump(1);
                }
                
              
            }else{
                
                if (20 < pipe.position.x < 250) {
                    // Si el pájaro está por debajo de la tubería superior, salta
                    this.jump(2);

                }
                if (birdData.y > scene.height - scene.floor - 80) {
                    this.jump(1);
                }
            }
          });
     }*/
      
    if(birdData.y > scene.height - scene.floor - 250) {
        this.jump(1);
    }

      
    
    }
  }
  
  export const color = 0xff00ff;
  