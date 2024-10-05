export async function getPhotos() {
  const res = await fetch(
    (process.env.NODE_ENV === 'production'
      ? 'https://beratbozkurt.net/'
      : 'http://localhost:3000/') + '/api/photo',
    {}
  );
  const result = await res.json();
  return result;
}
