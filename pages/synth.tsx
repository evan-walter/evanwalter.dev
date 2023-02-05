import { useState } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica'

export default function Synth() {
  const [togglePlay, setTogglePlay] = useState(false)
  const [speed, setSpeed] = useState(90)
  const [noteDisplayed, setNoteDisplayed] = useState('')

  return (
    <div className='flex flex-col items-center gap-y-8'>
      <div className='flex flex-wrap gap-4'>
        <button
          onClick={() => setSpeed((s) => (s = s + 5))}
          className='mx-auto rounded-full bg-blue-500 px-6 py-2 text-white transition duration-300 hover:scale-105 hover:ease-in-out'
        >
          Faster
        </button>
        <button
          onClick={() => setTogglePlay((s) => !s)}
          className={`${
            togglePlay ? 'bg-red-500' : 'bg-green-700'
          } mx-auto rounded-full px-6 py-2 text-white transition duration-300 hover:scale-105 hover:ease-in-out`}
        >
          {togglePlay ? 'Stop' : 'Play'}
        </button>
        <button
          onClick={() => setSpeed((s) => (s = s - 5))}
          className='mx-auto rounded-full bg-blue-500 px-6 py-2 text-white transition duration-300 hover:scale-105 hover:ease-in-out'
        >
          Slower
        </button>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p>Speed:</p>
        <p className='text-2xl text-blue-500'>{speed}bpm</p>
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
        {/* <Effect type='freeverb' wet={0} /> */}
      </Track>
    </Song>
  )
}
