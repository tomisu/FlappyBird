

import { Sprite } from 'pixi.js';


const MIN_HEIGHT = 150;
const MAX_HEIGHT = 400;

const HEIGHT_PER_LEVEL = 15;
const VARIANCE = 1;  // 100%


export default class Pipe extends Sprite {
  constructor(texture, level) {
    super(texture);
    this.isTop = Math.random() >= 0.5;
    this.pipeHeight = this.getHeight(level);
    this.pipeWidth = this.width;

    if (this.isTop) {
      this.scale.set(1, -1);
      this.y = this.pipeHeight;
    } else {
      this.y = 600 - this.pipeHeight;
    }
  }

  getHeight(level) {
    const base = MIN_HEIGHT + HEIGHT_PER_LEVEL * level;
    const variance = (Math.random() * 2 - 1) * base * VARIANCE;
    const total = base + variance;
    return Math.min(Math.max(total, MIN_HEIGHT), MAX_HEIGHT);
  }

  loop(dt) {
  }
}