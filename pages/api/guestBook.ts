import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import {
  NextApiRequestCookies,
  NextApiRequestQuery,
} from 'next/dist/server/api-utils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const guestbookPostData = JSON.parse(req.body)

  const newGuestbookPost = await prisma.guestbookPost.create({
    data: guestbookPostData,
  })

  res.json(newGuestbookPost)
}
