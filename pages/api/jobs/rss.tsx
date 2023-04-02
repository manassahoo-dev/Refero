export default async function handler(req, res) {
  const urls = [
    'https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss',
  ];

  const promises = urls.map((url) => fetch(url));

  try {
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map((res) => res.text()));
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
