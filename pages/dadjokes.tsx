import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [setup, setSetup] = useState('')
  const [punchline, setPunchline] = useState('')
  const [showPunchline, setShowPunchline] = useState(false)

  const fetchData = async () => {
    try {
      setShowPunchline(false)
      setLoading(true)
      const { data } = await axios.get(
        'https://official-joke-api.appspot.com/random_joke'
      )
      console.log(data)
      setSetup(`${data.setup}`)
      setPunchline(`${data.punchline}`)
      setSuccess(true)
    } catch (err: any) {
      setFailure(true)
      throw new Error(err)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-5 border-b border-gray-300 pb-10 max-[429px]:flex-col'>
        <Btn addClassNames='bg-indigo-500' onClick={fetchData}>
          Get a New Random Joke
        </Btn>
        <a
          href='https://karljoke.herokuapp.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='text-blue-500 underline hover:text-blue-600'
        >
          View API Docs
        </a>
      </div>
      <div className='mx-auto flex max-w-2xl flex-col'>
        {loading ? (
          <Status addClassNames='text-gray-500 mt-10'>
            Loading your joke...
          </Status>
        ) : null}
        {success ? (
          <>
            <div className='relative my-10'>
              <p className='absolute -top-[0.85rem] left-0 -z-10 font-serif text-9xl opacity-25 max-[374px]:hidden'>
                “
              </p>
              <JokeText addClassNames='min-[374px]:text-left'>{setup}</JokeText>
            </div>
            <Btn
              addClassNames='bg-pink-500 mx-auto'
              onClick={() => setShowPunchline(!showPunchline)}
            >
              {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
            </Btn>
          </>
        ) : null}
        {showPunchline ? (
          <div className='relative my-10'>
            <p className='absolute -top-[0.85rem] right-0 -z-10 font-serif text-9xl opacity-25 max-[374px]:hidden'>
              ”
            </p>
            <JokeText addClassNames='min-[374px]:text-right'>
              {punchline}
            </JokeText>
          </div>
        ) : null}
        {failure ? (
          <Status>There was an error loading your joke.</Status>
        ) : null}
      </div>
    </>
  )
}

interface BtnProps {
  addClassNames: string
  onClick: () => void
  children: React.ReactNode
}

export function Btn({ addClassNames, onClick, children }: BtnProps) {
  return (
    <button
      className={`${addClassNames} rounded-full py-4 px-6 text-white transition hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface StatusProps {
  addClassNames?: string
  children: React.ReactNode
}

export function Status({ addClassNames = '', children }: StatusProps) {
  return (
    <p className={`${addClassNames} text-center font-bold uppercase`}>
      {children}
    </p>
  )
}

interface JokeTextProps {
  addClassNames: string
  children: React.ReactNode
}

export function JokeText({ addClassNames, children }: JokeTextProps) {
  return (
    <p
      className={`${addClassNames} text-center text-xl min-[374px]:px-20 min-[374px]:text-2xl`}
    >
      {children}
    </p>
  )
}
