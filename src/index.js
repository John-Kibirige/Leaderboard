import './styles/main.scss';
import scores from './modules/scores.js';
import { createScore } from './modules/create-score';

const displayAllScores = document.querySelector('.display-all-scores');
scores.forEach((scoreObj) => {
  displayAllScores.appendChild(createScore(scoreObj));
});
