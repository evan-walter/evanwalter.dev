import { useState } from 'react'
import axios from 'axios'
import Btn from 'components/dadJokes/Btn'
import Status from 'components/dadJokes/Status'
import JokeText from 'components/dadJokes/JokeText'

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
      <div className='px-10'>
        <div className='mx-auto mb-10 flex max-w-2xl flex-col items-center justify-between border-b border-gray-300 pb-10 sm:flex-row'>
          <Btn addClassNames='bg-indigo-500' onClick={fetchData}>
            Get a New Random Joke
          </Btn>
          <a
            href='https://karljoke.herokuapp.com/'
            target='_blank'
            rel='noreferrer noopener'
            className='mt-5 text-blue-500 underline hover:text-blue-600 sm:mt-0'
          >
            View API Docs
          </a>
        </div>
        <div className='mx-auto flex max-w-2xl flex-col'>
          {loading ? (
            <Status addClassNames='text-gray-500'>Loading your joke...</Status>
          ) : null}
          {success ? (
            <>
              <div className='relative my-10'>
                <div className='leading-0 absolute top-0 left-0 -z-10 font-serif text-9xl text-gray-200'>
                  “
                </div>
                <JokeText addClassNames='sm:text-left px-20'>{setup}</JokeText>
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
              <div className='leading-0 absolute inset-y-0 right-0 -z-10 font-serif text-9xl text-gray-200'>
                ”
              </div>
              <JokeText addClassNames='sm:text-right px-20'>
                {punchline}
              </JokeText>
            </div>
          ) : null}
          {failure ? (
            <Status>There was an error loading your joke.</Status>
          ) : null}
        </div>
      </div>
    </>
  )
}
