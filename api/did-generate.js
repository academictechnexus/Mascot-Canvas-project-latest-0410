export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { text } = req.body;
  // TODO: Call D-ID API server-side with DID_API_KEY
  res.json({ videoUrl: null });
}
