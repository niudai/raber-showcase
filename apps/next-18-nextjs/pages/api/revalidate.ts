import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await res.revalidate(req.query.path as string)
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error revalidating')
  }
}
