export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;
  res.json({ reply: `Echo: ${message}` });
}
