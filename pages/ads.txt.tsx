// pages/api/ads.txt.tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  
  // Your ads.txt content goes here
  const adsTxtContent = `
    google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
    another-ad-network.com, 9876543210, RESELLER, 123abc456def789
  `;

  // Send the ads.txt content as the response
  res.status(200).send(adsTxtContent);
};
