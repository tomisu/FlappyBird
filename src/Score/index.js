import { Container, Text } from 'pixi.js';

import compareScores from './compareScores';

const MARGIN_TOP = 20;
const MARGIN_RIGHT = 20;


export default class ScoreManager extends Container {
  constructor(scores) {
    super();
    this.scores = scores;
    this.updateScore();
  }

  changeScore(name, score) {
    this.scores[name] = score;
    this.updateScore();
  }

  updateScore() {
    const style = {
      fontFamily: 'Arial',
      fontSize: 20,
      fill: 0x000000,
      align: 'right',
    };

    this.texts = Object.entries(this.scores).sort(compareScores).map(([name, score], index) => {
      const content = `${name} ${score ?? "---"}`
      const scoreStyle = { ...style, fill: score === null ? 0x000000 : 0xff0000 };
      const text = new Text(content, scoreStyle);
      text.y = index * 30;
      return text;
    });

    this.removeChildren();
    this.addChild(...this.texts);
    this.x = 800 - this.width - MARGIN_RIGHT;
    this.y = MARGIN_TOP;
  }
}
