import './styles/main.scss';
import scores from './modules/scores.js';
import createScore from './modules/create-score.js';
import getIdentifier from './modules/api.js';

const displayAllScores = document.querySelector('.display-all-scores');
scores.forEach((scoreObj) => {
  displayAllScores.appendChild(createScore(scoreObj));
});

// get exact id
getIdentifier().then((response) => {
  const { result } = response;
  const [, , , actualId] = result.split(' ');
});
