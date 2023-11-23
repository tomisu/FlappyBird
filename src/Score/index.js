import { Container, Text } from 'pixi.js';


function compareScores(entryA, entryB) {
  const aScore = entryA[1];
  const bScore = entryB[1];

  if (aScore === null && bScore === null) {
    return 0;
  }

  if (aScore === null) {
    return -1;
  }
  if (bScore === null) {
    return 1;
  }

  return aScore >= bScore ? -1 : 1;
}

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
      fontSize: 24,
      fill: 0x000000,
      align: 'right',
    };

    console.log(this.scores);
    this.texts = Object.entries(this.scores).sort(compareScores).map(([name, score], index) => {
      const content = `${name} ${score ?? "---"}`
      const scoreStyle = { ...style, fill: score === null ? 0x000000 : 0xff0000 };
      const text = new Text(content, scoreStyle);
      text.y = index * 30;
      return text;
    });

    this.removeChildren();
    this.addChild(...this.texts);
  }
}
