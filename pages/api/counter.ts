import type { NextApiRequest, NextApiResponse } from 'next'

let count = 0;

type Data = {
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ count })
}