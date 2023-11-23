

export default class BirdController1 {
  constructor(jump) {
    this.name = 'Tomás';
    this.jump = jump;
  }

  keepLevel(level, birdData) {
    if (birdData.y >= level) {
      this.jump(1);
    }
  }


  loop(birdData, pipes, scene, dt) {
    /*
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array de Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor}
    ** dt: milisegundos desde la anterior actualización
    */

    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);
    }
  }
}
