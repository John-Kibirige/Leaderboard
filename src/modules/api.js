const postData = async (data) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2CK77ljZH2u23q36Lc0c/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

const getData = async () => {
  let response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2CK77ljZH2u23q36Lc0c/scores/'
  );
  response = await response.json();
  return response;
};

export { postData, getData };
