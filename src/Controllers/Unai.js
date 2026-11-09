

export default class UnaiController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Unai';
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

    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(2);
    }

    // buscamos proxima tuberia mas cercana
    const ProximaTuberia = proximaTuberia(birdData, pipes);

    // si no hay tuberias nos quedamos en el medio
    let posicionY = scene.height / 2;


    // calculamos el centro del hueco
    if(ProximaTuberia){
      posicionY = posicionYIdeal(ProximaTuberia, scene);
    }
    
    // decidir si salta el pajaro
    if(birdData.y > posicionY + 10){

      this.jump(3); //ejecutamos jump
      
    }


    function proximaTuberia (pipe, scene){  

    /* 
    
    let es una palabra clave que se utiliza para declarar variables cuyo valor puede cambiar más adelante 
    
    Infinity es una propiedad global que representa un valor numérico infinito
    
    */
    let tuberiaCercana = null;
    let DistanciaMin = Infinity;

    for (const pipe of pipes){

      // calculamos el extremo mas cercano de la tuberia del tubo para saber si lo hemos pasado
      const tuberiaDerechaX = pipe.x + pipe.pipeWidth;

      if (tuberiaDerechaX > birdData.x){

        // buscamos el que este mas cerca en el eje X
        const distancia = pipe.x - birdData.x;
        if(distancia < DistanciaMin){
          DistanciaMin = distancia;
          tuberiaCercana = pipe;          
        }
      }      
    }
    return tuberiaCercana;    
  }






    function obtenerPosicionY (pipe, scene){

    if(pipe.isTop){

      // Si es el tubo superior, el hueco empieza en 'pipeHeight
      const espacio = 150;
      return pipe.pipeHeight + (espacio/2)
    } else{

      // // Si es el tubo inferior, el hueco termina donde empieza este tubo
      const espacio = 150;
      return pipe.y - (espacio/2)

      
    }
    
}
    
  }
}
export const color = 0xff00ff;
