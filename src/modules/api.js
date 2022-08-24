const getIdentifier = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Kipi game',
      }),
    }
  );
  return response.json();
};

export default getIdentifier;
