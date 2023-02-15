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
    <div className='mx-auto flex max-w-2xl flex-col gap-y-10'>
      <Btn addClassNames='bg-indigo-500 mx-auto' onClick={fetchData}>
        Get a New Random Joke
      </Btn>
      <hr className='border-t-[2.5px] border-dotted border-zinc-500 dark:border-zinc-400' />
      {loading ? (
        <Status addClassNames='text-gray-500'>Loading your joke...</Status>
      ) : null}
      {success ? (
        <>
          <div className='relative'>
            <p className='absolute -top-[0.85rem] left-0 font-serif text-9xl opacity-25 max-[374px]:hidden'>
              “
            </p>
            <JokeText addClassNames='min-[374px]:text-left min-[374px]:pl-20'>
              {setup}
            </JokeText>
          </div>
          <Btn
            addClassNames='bg-pink-500 mx-auto'
            onClick={() => setShowPunchline((s) => !s)}
          >
            {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
          </Btn>
        </>
      ) : null}
      {showPunchline ? (
        <div className='relative'>
          <p className='absolute -top-[0.85rem] right-0 font-serif text-9xl opacity-25 max-[374px]:hidden'>
            ”
          </p>
          <JokeText addClassNames='min-[374px]:text-right min-[374px]:pr-20'>
            {punchline}
          </JokeText>
        </div>
      ) : null}
      {failure ? <Status>There was an error loading your joke.</Status> : null}
    </div>
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
      className={`${addClassNames} rounded-full py-4 px-6 text-white transition duration-300 hover:scale-105 hover:ease-in-out`}
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
    <p className={`${addClassNames} text-center text-xl min-[374px]:text-2xl`}>
      {children}
    </p>
  )
}
