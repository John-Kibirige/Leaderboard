import './styles/main.scss';
import { createScore, Score } from './modules/create-score.js';
import { postData, getData } from './modules/api.js';
import { handleValidation, validInput } from './modules/validation.js';

const submitBtn = document.querySelector('#submit-btn');
const name = document.querySelector('.form-name');
const score = document.querySelector('.form-score');
const refreshBtn = document.querySelector('.refresh');

const handleClick = (e) => {
  e.target.classList.add('active');
  setTimeout(() => {
    e.target.classList.remove('active');
  }, 100);
};
const displayAllScores = document.querySelector('.display-all-scores');

submitBtn.addEventListener('click', (e) => {
  handleClick(e);
  if (!validInput(name, score)) {
    handleValidation(name, score);
    return;
  }

  const newScore = new Score(name.value, +score.value);
  postData(newScore).then((returned) => {
    if (returned.result === 'Leaderboard score created correctly.') {
      // display success message
    } else {
      // display failure message
    }
  });
});

const fetchAndDisplay = () => {
  getData().then((returned) => {
    const { result: scores } = returned;
    displayAllScores.innerHTML = '';
    scores.forEach((scoreObj) => {
      displayAllScores.appendChild(createScore(scoreObj));
    });
  });
};

refreshBtn.addEventListener('click', (e) => {
  handleClick(e);
  fetchAndDisplay();
});

window.addEventListener('load', () => {
  fetchAndDisplay();
});
