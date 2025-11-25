

export default class ArianaController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Ariana';

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

    if (birdData.y > scene.height - scene.floor - 60) {
      this.jump(3);
      //console.log(dt);
    }

    // Recorremos cada tubería
    pipes.forEach(pipe => {

      const pipeXMin = pipe.x; //Empieza el pipe
      const pipeXMax = pipe.x + pipe.pipeWidth; //Donde termina el pipe

      if (birdData.x > pipeXMin - 100 && birdData.x < pipeXMax + 100) { //Margen de 100 a ambos lados
        // TUBERÍA SUPERIOR
        if (pipe.isTop) {
          if (birdData.y < pipe.pipeHeight + 25) { 
            //No salta, por ahora 
            this.jump(1); //Por si acaso
          }
          const orientacion = "sup"; 
        } else {// TUBERÍA INFERIOR
            if (birdData.y > scene.height - scene.floor - pipe.pipeHeight - 25) { //Margen de 25
              this.jump(2);
            }
            const orientacion = "inf"; 
        }
      }

      /*
      NO ME HA DADO TIEMPO A MEJORAR CON ESTO

      const xAntiguo = pipe.x;
      const yAntiguo = pipe.y;

      if(orientacionAnt != orientacion){


      }
      
      const orientacionAnt = orientacion;
      */
      
    });

  }
}

export const color = 0x40E0D0;
