import { Container } from 'pixi.js';

import Pipe from "./Pipe";


export default class PipeManager extends Container {
  constructor(pipeTexture) {
    super();
    this.pipeTexture = pipeTexture;

    this.pipes = [];

    this.elapsed = 0;

    // Level
    this.pipesPerLevel = 4;
    this.totalPipes = 0;

    this.currentInterval = this.getInterval();
  }

  get level() {
    return Math.floor(this.totalPipes / this.pipesPerLevel);
  }

  get pipeSpeed() {
    const BASE_PIPE_SPEED = 3;
    const PIPE_ACCEL_LEVEL = 0.5;
    const calculated = BASE_PIPE_SPEED + this.level * PIPE_ACCEL_LEVEL;
    const maxSpeed = 9;
    return Math.min(calculated, maxSpeed);
  }

  getInterval() {
    const base = 3000 - this.level * 150;
    const percent = 0.5;  // 50%
    const modifyer = (Math.random() * 2 - 1) * base * percent;  // +-percent
    const minInterval = 1000;
    return Math.max(minInterval, base + modifyer);
  }

  createPipe() {
    const newPipe = new Pipe(this.pipeTexture, this.level);
    newPipe.x = 800;
    this.pipes.push(newPipe);
    this.totalPipes += 1;
    this.addChild(newPipe);
  }

  removePipe(pipe) {
    this.removeChild(pipe);
    const index = this.pipes.indexOf(pipe);
    if (index > -1) {
      this.pipes.splice(index, 1);
    }
  }

  loop(dt) {
    // Generate pipes
    this.elapsed += dt;
    if (this.elapsed >= this.currentInterval) {
      this.currentInterval = this.getInterval();
      this.elapsed = 0;
      this.createPipe();
    }

    // Move pipes
    this.pipes.forEach(pipe => {
      pipe.position.x -= this.pipeSpeed;
      if (pipe.position.x + pipe.width < 0) {
        this.removePipe(pipe);
      }
    });
  }
}
