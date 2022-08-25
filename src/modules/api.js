const postData = async (scoreObject) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2CK77ljZH2u23q36Lc0c/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(scoreObject),
    }
  );
  return response.json();
};

export { postData };
