

export default class IvanCController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'IvánCameo';
  }

  loop(birdData, pipes, scene, dt) {


    //LIMITES PARA QUE NO SE SALGA
    const suelo_limit = scene.height+20;
    const techo_limit = scene.floor - 20;
    
    // Encontrar la tubería más cercana por delante
    let siguienteTuberia = null;
    for (let i = 0; i < pipes.length; i++) {
      if (pipes[i].x + pipes[i].pipeWidth >= birdData.x) {
        if (siguienteTuberia === null || pipes[i].x < siguienteTuberia.x) {
          siguienteTuberia = pipes[i];
        }
      }
    }
    
    console.log(siguienteTuberia);
    
  
    //logica para mantenerse en el medio de la pantalla
    if (birdData.y < scene.height / 2+20) {
      // Si el pájaro está en la mitad superior, dejarlo caer
    } else {
      // Si el pájaro está en la mitad inferior, hacer que salte
      this.jump(1);
    } 

    if (birdData.y > scene.height / 2+50) {
      
    }

    // Lógica para acercarse a la tubería siguiente
    //Si hay una tubería siguiente, tuberia de arriba, caer en caso contrario, saltar

    if (siguienteTuberia) {
      const distancia = siguienteTuberia.x - birdData.x;
      if (siguienteTuberia.isTop && distancia < 100 && distancia > 0) {
        // Tubería superior saliente: dejar caer (no hacer nada)
            //logica para mantenerse en el medio de la pantalla
          if (birdData.x < scene.height / 2+50) {
            // Si el pájaro está en la mitad superior, dejarlo caer
          } else {
            // Si el pájaro está en la mitad inferior, hacer que salte
            this.jump(1);
          } 
        
      } else if (!siguienteTuberia.isTop && distancia < 75 && distancia > 25) {
        // Tubería inferior: saltar solo cuando está en un rango específico
        if (birdData.y > siguienteTuberia.pipeHeight - 30) {
          this.jump(1.5);
        }
        if (birdData.y > siguienteTuberia.pipeHeight) {
          this.jump(1);
        }
      }

    }


    if (!siguienteTuberia) {
      // Si no hay tuberías, mantener el pájaro en el centro
      if (birdData.y < scene.height / 2) {
        // Si el pájaro está en la mitad superior, dejarlo caer
      } else {
        // Si el pájaro está en la mitad inferior, hacer que salte
        this.jump(1);
      }
    }






    // Evitar que el pájaro se salga de los límites
    if (birdData.y < techo_limit) {
      this.jump(3);
    }
    if (birdData.y > suelo_limit) {
      // No hacer nada, dejar que el pájaro caiga
    }

    // Lógica básica para evitar caer al suelo  


    
  }
}

export const color = 0xfa0aff;
