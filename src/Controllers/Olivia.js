

export default class OliviaController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Olivia';
  }

  loop(birdData, pipes, scene, dt) {
    /*
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int } Donde se encuentra el pájaro
    ** pipes = array of Pipe  Lista de tuberías 
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int} Información de cada tubería
    ** scene: {width: 800, height: 600, floor: int (the floor height)}  Información de la escena
    ** dt: milliseconds elapsed since last update  Tiempo transcurrido desde la última actualización
    */    

    // Saltar antes de chocar con el suelo
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }

    const pipeMasCercana = null;
    const distancias = [];
  
    // Saltar al acercarse a una tubería de abajo
    for (let pipe of pipes) {
      
      const diffx = pipe.x - birdData.x;

      
      if (!pipe.isTop && diffx < 80 && pipe.x > birdData.x) {
        if (pipe.pipeHeight > birdData.y + 10){
          this.jump(2);
          console.log("salto 3");
          break;
          console.log("Diferencia de x para jump 4: " + diffx);
          if (birdData.y > scene.height - scene.floor - 10) {
            this.jump(3);
          }
        }else{
          this.jump(2);
          console.log("salto 2");
          break;
          console.log("Diferencia de x para jump 3: " + diffx);
          if (birdData.y > scene.height - scene.floor - 10) {
            this.jump(3);
          }
        }

      }
    }

  }
}

export const color = 0x00ffff;
