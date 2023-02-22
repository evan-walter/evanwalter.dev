import { useTextLinkContext } from 'components/TextLinkProvider'
import GhostBedWorks from '@/components/works/GhostBedWorks'
import Features from 'components/Features'
import Contact from 'components/Contact'
import TextGeneratorAnnouncement from 'components/works/TextGeneratorAnnouncement'
import DadJokesAnnouncement from 'components/works/DadJokesAnnouncement'
import SynthAnnouncement from 'components/works/SynthAnnouncement'
import LensStarterAppAnnouncement from 'components/works/LensStarterAppAnnouncement'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8 text-lg'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-1 text-3xl font-bold md:text-4xl'>Works</h1>
        <p>
          To check out my works, exploring this website you&apos;re on,{' '}
          <a
            href='https://github.com/evan-walter/evanwalter.dev'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            evanwalter.dev
          </a>
          , is a great place to start since I created it from scratch!
        </p>

        <div className='my-4'>
          <GhostBedWorks />
        </div>

        <h2 id='personal-works' className='text-2xl font-bold sm:text-3xl'>
          Personal Works
        </h2>

        <div className='my-4'>
          <TextGeneratorAnnouncement />
        </div>

        <div className='my-4'>
          <LensStarterAppAnnouncement />
        </div>

        <div className='my-4'>
          <DadJokesAnnouncement />
        </div>

        <div className='my-4'>
          <SynthAnnouncement />
        </div>

        <p>
          I&apos;d also like to highlight some works I&apos;ve contributed at{' '}
          <a
            href='https://www.ghostbed.com/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GhostBed
          </a>{' '}
          along with some of my personal works, such as features here on this
          web app and other projects.
        </p>
      </div>

      <Features />

      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold sm:text-3xl'>Other Personal Works</h2>
        <p>
          Currently, you can check out all my other personal works on{' '}
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

      <Contact />
    </div>
  )
}
