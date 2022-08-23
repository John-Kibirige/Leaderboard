export const createScore = (scoreObj) => {
  const li = document.createElement('li');
  li.classList.add('score-item');
  li.innerText = `${scoreObj.name}: ${scoreObj.score}`;
  return li;
};
