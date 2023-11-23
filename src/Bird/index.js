import { Container, Sprite, Text } from 'pixi.js';
import hitTest from './hitTest';

const GRAVITY = 0.01;


const JUMP_STRENGTH = {
  1: -6,
  2: -7,
  3: -8,
};


export default class Bird extends Container {
  constructor(texture, BirdControllerClass) {
    super(texture);
    this.speed = 0;

    this.birdSprite = new Sprite(texture);
    this.birdSprite.scale.set(0.1, 0.1);
    this.birdSprite.anchor.x = 0.5;
    this.birdSprite.anchor.y = 0.5;
    this.addChild(this.birdSprite);

    this.controller = new BirdControllerClass(strength => this.jump(strength));
    this.name = this.controller.name;
    this.flying = true;

    const text = new Text(this.name, {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xffffff,
      align: 'center',
    });
    text.y = -this.birdSprite.height - 10;
    text.x = -this.birdSprite.width / 2;
    this.addChild(text)
  }

  jump(strength) {
    if (this.flying === false) {
      return;
    }

    this.speed = JUMP_STRENGTH[strength];
  }

  die() {
    this.birdSprite.tint = 0xaa0000;
    this.flying = false;
  }

  detectCollision(pipes) {
    for (let pipe of pipes) {
      if (hitTest(this.birdSprite, pipe)) {
        this.die()
      }
    }
  }

  rotate() {
    const maxAngle = 60;
    const maxSpeed = 6;
    const absSpeed = Math.min(maxSpeed, Math.abs(this.speed));

    const percent = absSpeed / maxSpeed;
    const angle = maxAngle * percent;
    const sign = this.speed > 0 ? 1 : -1;

    this.birdSprite.angle = angle * sign;
  }

  loop(dt, pipes) {
    this.position.y += this.speed;
    this.speed += GRAVITY * dt;
    this.rotate();

    this.controller.loop(
      { x: this.position.x, y: this.position.y, speed: this.speed },
      pipes,
      { width: 800, height: 600, floor: 50 },
      dt
    );
    this.detectCollision(pipes);

    const hitGround = this.y >= (600 - 50);
    const hitCeiling = this.y <= 0;
    if (this.flying && hitGround) {
      this.die();
    }
    if (this.flying && hitCeiling) {
      this.speed = 1;
      this.die();
    }
  }
}