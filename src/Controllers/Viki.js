

export default class TomasController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Viki';
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
      this.jump(3);
    }

    if (birdData.y < 50) {
      return; // No saltar si estamos demasiado cerca del techo
    }

// Filtrar las tuberías que están delante del pájaro
let closestPipeFloor = pipes
.filter(pipe => pipe.x > birdData.x && !pipe.isTop)
.sort((a, b) => a.x - b.x)[0];

let closestPipeTop = pipes
.filter(pipe => pipe.x > birdData.x && pipe.isTop)
.sort((a, b) => a.x - b.x)[0];

// Si ambas tuberías existen
if (closestPipeFloor && closestPipeTop) {
let distanceToPipe = closestPipeFloor.x - birdData.x;

// Si la tubería está cerca
if (distanceToPipe < 100) {
  let gapTop = closestPipeTop.pipeHeight;
  let gapBottom = closestPipeFloor.pipeHeight;

  // Si el pájaro está demasiado cerca de la tubería superior o inferior, saltar
  if (birdData.y < gapTop + 10) {
    return; // Saltar con fuerza ajustada según la situación
  } else if(birdData.y > gapBottom - 10){
    this.jump(3)
  }
}
}
}
   
}
export const color = 0xe83418;
