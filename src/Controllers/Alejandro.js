import Bird from "../Bird";


export default class TomasController {

  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Alejandro';
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
    // ||birdData.y >
    // console.log("B");
    // let tuberia = pipes[contador];
    if (birdData.y > scene.height - scene.floor - 10 ) {
      
    // this.jump(3);
        this.jump(3);
       //console.log("A");


    }
    // if((birdData.y > scene.height - scene.floor - 10||birdData.y < 550)&&(birdData.y > 350) ){
    //   console.log("C")

    //   this.jump(1);
      
    // }
    
    pipes.forEach(pipe => {
      

      if(pipe.isTop){
        console.log("Es top");
        if((birdData.y > scene.height - scene.floor - 10)){
          this.jump(1);
        }
        

      }else{
        console.log("Es abajo");
        if(birdData.y>pipe.pipeHeight){
          this.jump(1);
        }

      }
      
      // Si necesitas hacer algo con la altura, puedes agregar tu lógica aquí
      // Por ejemplo, verificar si el pájaro choca con la tubería


      if (birdData.x + birdData.width > pipe.x && birdData.x < pipe.x + pipe.pipeWidth) {
          if (birdData.y < pipe.y + pipe.pipeHeight && pipe.isTop) {
              // this.die(); // Colisión con la tubería superior
          } else if (birdData.y + birdData.height > pipe.y) {
              // this.die(); // Colisión con la tubería inferior
          }
      }
      // if(!pipe.isTop && birdData.y < pipe.height && birdData.y > 200){
      //   this.jump(1);
      // }

      
    });
    

  }
}

export const color = 0xff00ff;
