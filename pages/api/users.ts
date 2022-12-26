// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import user from '../../schemas/user';
import { mongooseConnect } from '../../utils/mongo-connect';

mongooseConnect();

type Data = {
  ok: boolean
  body: any
  users: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const body = req.body;

  const users = await user.find({});
  res.status(200).json({ ok: true, body, users })
}
