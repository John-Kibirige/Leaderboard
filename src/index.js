import './styles/main.scss';
import scores from './modules/scores.js';
import { createScore, Score } from './modules/create-score.js';
import { postData } from './modules/api.js';

const submit = document.querySelector('#submit-btn');
const name = document.querySelector('.form-name').value;
let score = document.querySelector('.form-score').value;

const displayAllScores = document.querySelector('.display-all-scores');
scores.forEach((scoreObj) => {
  displayAllScores.appendChild(createScore(scoreObj));
});

submit.addEventListener('click', () => {
  score = +score;
  const newScore = new Score(name, score);
  postData(newScore).then((returned) => {
    if (returned.result === 'Leaderboard score created correctly.') {
      // display success message
    } else {
      // display failure message
    }
  });
});
