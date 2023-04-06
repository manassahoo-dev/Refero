import { NextApiHandler } from 'next';

const urls = [
  'https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss',
  'https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss',
  'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss',
];

const handler: NextApiHandler = async (req, res) => {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((res) => res.text()));
  res.status(200).json(data);
};

export default handler;
