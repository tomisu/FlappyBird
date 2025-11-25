export default class AlexController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Alex';
  }

  loop(birdData, pipes, scene, dt) {
    
    if (this._cool === undefined) this._cool = 0;
    this._cool = Math.max(0, this._cool - dt);


    const next = pipes.find(p => p.x + p.pipeWidth > birdData.x);

    if (next) {
      const x = next.x;
      const top = pipes.find(p => p.x === x && p.isTop) || null;
      const bottom = pipes.find(p => p.x === x && !p.isTop) || null;

      const holeTop = top ? top.pipeHeight : 0;
      const holeBottom = bottom ? scene.height - bottom.pipeHeight - scene.floor : scene.height - scene.floor;
      const holeMid = (holeTop + holeBottom) / 2;

      const vel = birdData.speed || 0;
      const lead = Math.min(25, Math.max(0, vel * 2.5));
      const aimY = holeMid - lead;

      const diff = birdData.y - aimY;

      
      const jitter = (Math.random() - 0.5) * 6; 
      const score = diff + jitter;

      if (this._cool <= 0) {
        if (score > 50) {
          this.jump(3);
          this._cool = 180 + Math.random() * 80;
        } else if (score > 24) {
          this.jump(2);
          this._cool = 100 + Math.random() * 70;
        } else if (score > 6) {
          this.jump(1);
          this._cool = 60 + Math.random() * 50;
        }
      }
    }

    
    const danger = scene.height - scene.floor - 10;
    if (birdData.y > danger && this._cool <= 0) {
      this.jump(3);
      this._cool = 240;
    }
  }
}

export const color = 0xff00ff;