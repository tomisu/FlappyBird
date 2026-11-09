// FIX: Remove the duplicated trailing loop/class code and color export so the module parses.
export default class TomasController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'anas';
    // FIX: Close the constructor before declaring loop so the class is valid JavaScript.
  }

  loop(birdData, pipes, scene, dt) {
    const birdY = birdData.y;
    // FIX: Define suelo from the scene dimensions; it was undefined and would crash loop.
    const suelo = scene.height - scene.floor;
    if (birdY > suelo - 80) {
      this.jump(3);
    }
  }
}

export const color = 0x00ff00;
