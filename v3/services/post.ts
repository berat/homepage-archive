export async function getViews(title: string) {
  const res = await fetch(
    (process.env.NODE_ENV === 'production'
      ? 'https://beratbozkurt.net/'
      : 'http://localhost:3000/') +
      'api/post/view?title=' +
      title,
    {
      cache: 'no-cache'
    }
  );
  const result = await res.json();
  return result;
}
