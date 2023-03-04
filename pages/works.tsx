import { useTextLinkContext } from 'components/TextLinkProvider'
import GhostBedWorks from 'components/works/GhostBedWorks'
import Features from 'components/Features'
import Gpt3Announcement from 'components/works/Gpt3Announcement'
import DadJokesAnnouncement from 'components/works/DadJokesAnnouncement'
import SynthAnnouncement from 'components/works/SynthAnnouncement'
import LensStarterAppAnnouncement from 'components/works/LensStarterAppAnnouncement'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8 text-lg'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-1 text-3xl font-bold md:text-4xl'>Works</h1>

        <div className='my-4'>
          <GhostBedWorks />
        </div>

        <h2 id='personal-works' className='text-2xl font-bold sm:text-3xl'>
          Personal Works
        </h2>

        <div className='my-4'>
          <LensStarterAppAnnouncement addClassNames='from-blue-500 via-purple-500 to-pink-500' />
        </div>

        <div className='my-4'>
          <DadJokesAnnouncement addClassNames='from-purple-500 via-pink-500 to-blue-500' />
        </div>

        <div className='my-4'>
          <SynthAnnouncement addClassNames='from-pink-500 via-blue-500 to-purple-500' />
        </div>

        <div className='my-4'>
          <Gpt3Announcement addClassNames='from-blue-500 via-purple-500 to-pink-500' />
        </div>
      </div>

      <Features />

      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold sm:text-3xl'>Other Personal Works</h2>
        <p>
          Check out more of my open-source projects on{' '}
          <a
            href='https://www.github.com/evan-walter/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
