export default class JagelyController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Jagely';
  }
  loop(birdData, pipes, scene, dt) {
    /*
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since the last update
    */

    // Check if the bird is about to collide with a pipe
    const isBirdColliding = this.isCollidingWithPipe(birdData, pipes);

    // If the bird is close to the ground or about to collide with a pipe, jump
    if (birdData.y > scene.height - scene.floor - 10 || isBirdColliding) {
      this.jump(1); // Adjust the jump strength as needed
    }
  }

  isCollidingWithPipe(birdData, pipes) {
    for (const pipe of pipes) {
return true;
    }
    return false; // Bird is not colliding with any pipes
  }
}

