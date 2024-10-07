const collectionId: number = 25106674;

const fetchBookmarks = async () => {
  try {
    const url = `https://api.raindrop.io/rest/v1/raindrops/0?collectionId=${collectionId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.RAINDROP_API_KEY
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchBookmarks };
