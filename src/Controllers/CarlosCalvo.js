<<<<<<< HEAD:src/Controllers/CarlosCalvo.js


export default class CarlosController {
=======
export default class TomasController {
>>>>>>> 34bd0bb (Flappybird Ivan Corro):src/Controllers/Tomas.js
  constructor(jump) {
    /*
     ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
     ** The higher the strength, the bigger the jump
     */
    this.jump = jump;
<<<<<<< HEAD:src/Controllers/CarlosCalvo.js
    this.name = 'CarlosCalvo';
=======
    this.name = "Tomás";
>>>>>>> 34bd0bb (Flappybird Ivan Corro):src/Controllers/Tomas.js
  }

  loop(birdData, pipes, scene, dt) {
    /*
<<<<<<< HEAD:src/Controllers/CarlosCalvo.js
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */
    
  
=======
     ** This function is called every frame.
     **
     ** birdData = {x: int, y: int, speed: int }
     ** pipes = array of Pipe
     ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
     ** scene: {width: 800, height: 600, floor: int (the floor height)}
     ** dt: milliseconds elapsed since last update
     */

>>>>>>> 34bd0bb (Flappybird Ivan Corro):src/Controllers/Tomas.js
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(1);
    }
    for (let pipe of pipes) {

      if ((pipe.x > 200 && pipe.isTop==false) && birdData.y > scene.height - scene.floor - 90){
       this.jump(2);
    
      }

    }
    

  }
}

export const color = 0xC418AA;
