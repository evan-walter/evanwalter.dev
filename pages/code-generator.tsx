import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default function CodeGenerator() {
  const [tempPrompt, setTempPrompt] = useState('temporary prompt not set')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')

  async function fetchData(e: any) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`/api/get-ai-response?prompt=${tempPrompt}`)
    const data = await res.json()

    setData(data.choices[0].text.trim())
    setLoading(false)
    console.log(data)
  }

  return (
    <>
      <form onSubmit={(e) => fetchData(e)}>
        <textarea
          name='prompt'
          placeholder='Type your prompt here.'
          onChange={(e) => setTempPrompt(e.target.value)}
        />
        <button type='submit'>Generate</button>
      </form>
      <div>{tempPrompt}</div>

      {loading ? <div>Please wait...</div> : null}

      {data.length > 0 && !loading ? <div>{data}</div> : null}
    </>
  )
}
