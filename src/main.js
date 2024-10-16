
  import { Application, Assets, Sprite, Text } from 'pixi.js';
  import Bird from './Bird';
  import ControllerList from './ControllerList';
  import PipeManager from './Pipes';
  import ScoreManager from './Score';


  const BIRD_X = 150;


  class FlappyGame extends Application {
    constructor() {
      super();
      this.initialize();
    }

    async initialize() {
      const bgTexture = await Assets.load('/assets/background.png');
      const birdTexture = await Assets.load('/assets/bird.png');
      const pipeTexture = await Assets.load('/assets/pipe.png');

      this.birdTexture = birdTexture;

      // Create BG
      this.bg = new Sprite(bgTexture);
      this.stage.addChild(this.bg);

      // Create Pipes
      this.pipeManager = new PipeManager(pipeTexture);
      this.stage.addChild(this.pipeManager);

      // Create Birds
      this.birds = await this.createBirds();
      this.stage.addChild(...this.birds);

      // Create Score
      this.score = new ScoreManager(this.birds.reduce(
        (score, bird) => {
          score[bird.name] = null;
          return score;
        }, {}
      ));
      this.stage.addChild(this.score);

      this.secondsElapsed = 0;

      this.ticker.add(() => {
        this.loop(this.ticker.deltaMS);
      });
    }

    async createBirds() {
      const imports = ControllerList.map(moduleName => import(`./Controllers/${moduleName}.js`));
      const modules = await Promise.all(imports);

      // Now you can use the imported modules
      return modules.map(module => {
        const newBird = new Bird(this.birdTexture, module.default, module.color);
        newBird.position.x = BIRD_X;
        newBird.position.y = this.stage.height / 2;
        return newBird;
      });
    }

    get currentScore() {
      return Math.round(this.secondsElapsed * 100) / 100
    }

    cleanBird(bird) {
      if (bird.flying === false) {
        // Disqualify bird
        if (bird.disqualified !== true) {
          bird.score = this.currentScore;
          bird.disqualified = true;
          this.score.changeScore(bird.name, bird.score);
        }

        // Remove bird from game
        if (bird.y > 600) {
          const index = this.birds.indexOf(bird);
          if (index > -1) {
            this.birds.splice(index, 1);
          }
          this.stage.removeChild(bird);
          if (this.birds.length === 0) {
            this.ticker.stop();
          }
        }
      }
    }

    loop(dt) {
      this.secondsElapsed += dt / 1000;
      this.pipeManager.loop(dt);
      this.birds.forEach(bird => {
        bird.loop(dt, this.pipeManager.pipes);
        this.cleanBird(bird);
      })
    }
  }

  const app = new FlappyGame();

  document.getElementById('app').appendChild(app.view);
