// import type { NextApiResponse } from 'next'
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: any, res: any) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${req.query.prompt}`,
    temperature: 0.7,
    max_tokens: 100,
  })

  res.status(200).json(response.data)
}
