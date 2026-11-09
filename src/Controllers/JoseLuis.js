

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'JoseLuis';
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
    //Scene floor = 600
    //Scene height = 60
    let alturaSalto = 300;
    let acumular = true;

    if(birdData.y < 200){
      acumular = false;
    }
    if (pipes[0]!= null){
      if(pipes[0].isTop){
        alturaSalto = 450;
        if (pipes[1]!= null && pipes[1].isTop == false){
          alturaSalto = 400;
        }
        if (pipes[0].pipeHeight > 200){
          alturaSalto = 500;
        }
        if (birdData.y > alturaSalto){
          this.jump(1);
          acumular = true;
        }
      }
      else{
        alturaSalto = 350;
        if(birdData.y > alturaSalto){
          this.jump(1);
        }
        if (pipes[0].pipeHeight > 200 && acumular){
          this.jump(1);
          acumular = false;
        }
      }
    }



    if(pipes[0]!= null){
      console.log(pipes[0].pipeHeight);
    }

    

  

    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }


    
    
    console.log("Y del pajaro: " + birdData.y);
    console.log("Scene floor: " + scene.height);
    console.log("Scene Height: " + scene.floor);


  }
}

export const color = 0xff00ff;
