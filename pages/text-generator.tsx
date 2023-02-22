import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { useTextLinkContext } from 'components/TextLinkProvider'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default function TextGenerator() {
  const textLinkColors = useTextLinkContext()

  const [tempPrompt, setTempPrompt] = useState('Tell me something cool.')
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
    <div className='flex w-full flex-col gap-y-8 text-lg'>
      <p>
        Welcome to my{' '}
        <a
          href='https://platform.openai.com/docs/models/gpt-3'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GPT-3
        </a>{' '}
        text generator with from Open AI! Type anything below to generate a
        response.
      </p>
      <form
        className='flex w-full flex-col gap-y-8'
        onSubmit={(e) => fetchData(e)}
      >
        <textarea
          className='mx-auto w-full border border-zinc-400 bg-zinc-200 p-2 focus:outline-zinc-400 dark:bg-zinc-600'
          rows={5}
          name='prompt'
          placeholder={tempPrompt}
          onChange={(e) => setTempPrompt(e.target.value)}
        />
        <button
          className='mx-auto w-fit rounded-full border border-zinc-300 bg-zinc-200 px-5 py-2 transition duration-300 hover:scale-105 dark:border-none dark:bg-zinc-600'
          type='submit'
        >
          Generate
        </button>
      </form>

      {loading ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mx-auto h-10 w-10 animate-spin'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
          />
        </svg>
      ) : null}

      {data.length > 0 && !loading ? <p>{data}</p> : null}
    </div>
  )
}
