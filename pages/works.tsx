import { useTextLinkContext } from 'components/TextLinkProvider'
import GhostBedWorks from 'components/GhostBedWorks'
import Features from 'components/Features'
import Contact from 'components/Contact'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-1 text-3xl font-bold md:text-4xl'>Works</h1>
        <p>
          To check out my works, exploring{' '}
          <a
            href='https://github.com/evan-walter/evanwalter.dev/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            this website you&apos;re on
          </a>{' '}
          is a great place to start since I created it from scratch!
        </p>
        <p>
          I&apos;d also like to highlight some works I&apos;ve contributed to at{' '}
          <a
            href='https://www.ghostbed.com/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GhostBed
          </a>{' '}
          along with some of my personal works, such as features here on this
          website.
        </p>
      </div>

      <GhostBedWorks />
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
