import { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Synth() {
  const textLinkColors = useTextLinkContext()

  const [togglePlay, setTogglePlay] = useState(true)
  const [speed, setSpeed] = useState(90)
  const [noteDisplayed, setNoteDisplayed] = useState('')

  return (
    <>
      <div className='flex flex-col items-center gap-y-8'>
        <button
          onClick={() => setTogglePlay((s) => !s)}
          className={`${
            togglePlay ? 'bg-red-500' : 'bg-green-700'
          } mx-auto rounded-full px-6 py-2 text-white transition duration-300 hover:scale-105 hover:ease-in-out`}
        >
          {togglePlay ? 'Stop' : 'Play'}
        </button>
        <div className='mx-auto flex flex-wrap justify-center gap-6'>
          <button
            onClick={() => setSpeed((s) => (s = s + 5))}
            className='mx-auto rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition duration-300 hover:scale-105 hover:ease-in-out'
          >
            Faster
          </button>
          <button
            onClick={() => setSpeed((s) => (s = s - 5))}
            className='mx-auto rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition duration-300 hover:scale-105 hover:ease-in-out'
          >
            Slower
          </button>
        </div>
        <div className='flex flex-col items-center gap-y-2'>
          <p>Speed:</p>
          <p className='text-2xl text-blue-500'>{speed} bpm</p>
        </div>
        <div className='flex flex-col items-center gap-y-2'>
          <p className='text-2xl'>Current Note: </p>
          <p className='text-8xl text-pink-500'>{noteDisplayed}</p>
        </div>
        <Sounds
          togglePlay={togglePlay}
          setNoteDisplayed={setNoteDisplayed}
          speed={speed}
        />
      </div>
      <p className='mt-40 text-center text-sm opacity-75'>
        Special thanks to{' '}
        <a
          href='https://reactronica.com/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Reactronica
        </a>{' '}
        for the tools used in this project!
      </p>
    </>
  )
}

interface SoundsProps {
  togglePlay: boolean | undefined
  setNoteDisplayed: React.Dispatch<React.SetStateAction<string>>
  speed: number
}

export function Sounds({ togglePlay, setNoteDisplayed, speed }: SoundsProps) {
  return (
    <Song bpm={speed} isPlaying={togglePlay}>
      <Track
        steps={['C3', null, 'F3', 'G3']}
        volume={-3}
        pan={0}
        mute={false}
        onStepPlay={(step) => {
          // Callback that triggers on every step
          console.log(step[0] === undefined ? '(Rest)' : step[0].name) // 'C3' ... 'G3' ... 'F3' ... 'G3'
          setNoteDisplayed(
            step[0] === undefined ? '(Rest)' : step[0].name.toString()
          )
        }}
      >
        <Instrument
          type='synth'
          notes={[{ name: 'C3' }]}
          envelope={{
            attack: 0.2,
            release: 0.5,
          }}
        />
        <Effect type='distortion' wet={0.9} />
      </Track>
    </Song>
  )
}
