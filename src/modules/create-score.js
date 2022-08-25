class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const createScore = (scoreObj) => {
  const li = document.createElement('li');
  li.classList.add('score-item');
  li.innerText = `${scoreObj.name}: ${scoreObj.score}`;
  return li;
};

export { Score, createScore };
