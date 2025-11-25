

export default class GabyController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Gaby';
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
    let p = pipes[0];
    for (let pi in pipes){
        if (birdData.x >= pi.x){ //para coger los que estan a la derecha
            p = pi;
            break;
        }
    }
    if((birdData.x <= (p?.x + p?.pipeWidth)) && (birdData?.x > p?.x)){
        //choca en x, ahora hay que ver si choca en y
                if(p.isTop){ //si es una pipe de arriba
                    if((birdData.y <= (p.y + p.pipeHeight)) && (birdData.y > p.y)){
                        //choca
                        //mejor no saltar
                    }else{
                        this.jump(1);                               
                    }

                }else{ //si es una pipe de abajo
                    if((birdData.y >= (p.y - p.pipeHeight)) && (birdData.y < p.y)){
                        this.jump(3);
                    }
                }
    }


    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }
  }
}

export const color = 0xff0080;
