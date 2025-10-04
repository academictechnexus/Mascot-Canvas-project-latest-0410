export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { productId } = req.body;
  // TODO: Call Shopify API server-side with SHOPIFY_ADMIN_API_KEY/PASSWORD
  res.json({ checkoutUrl: 'https://checkout-link' });
}
