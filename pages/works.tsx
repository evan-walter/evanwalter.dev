import { useTextLinkContext } from 'components/TextLinkProvider'
import GhostBedWorks from 'components/GhostBedWorks'
import Features from 'components/Features'
import Contact from 'components/Contact'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8'>
      <div>
        <h1 className='mb-3 text-3xl font-bold md:text-4xl'>Works</h1>
        <p>
          I&apos;d like to highlight some works I&apos;ve contributed to at{' '}
          <a
            href='https://www.ghostbed.com/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GhostBed
          </a>{' '}
          along with some of my personal works, such as features on this
          website.
        </p>
      </div>
      <GhostBedWorks />
      <Features />
      <Contact />
    </div>
  )
}
