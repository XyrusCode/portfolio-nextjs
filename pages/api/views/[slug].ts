/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from "lib/firebase";
  
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // @ts-ignore
  const viewsRef = db.collection('views').doc(req.query.slug);

  if (req.method === 'POST') {
    try {
      const transactionResult = await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(viewsRef);
        let views = 0;
        
        if (doc.exists) {
          const data = doc.data();
          views = data ? data.views : 0;
        }
        
        transaction.set(viewsRef, { views: views + 1 });
        
        return views + 1;
      });
      
      return res.status(200).json({ total: transactionResult });
    } catch (error) {
      console.error('Error updating views:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const snapshot = await viewsRef.get();
      const viewsData = snapshot.data();
      const totalViews = viewsData ? viewsData.views : 0;
      return res.status(200).json({ total: totalViews });
    } catch (error) {
      console.error('Error retrieving views:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};