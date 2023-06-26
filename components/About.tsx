import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2 text-lg'>
      <p className='first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold'>
        I am a Software Engineer and former Web Developer at{' '}
        <a
          href='https://www.ghostbed.com/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GhostBed
        </a>
        . I have a high value for learning and offering valuable contribution as
        a team member. We worked with React, Next.js, TypeScript, GraphQL, Craft
        CMS, Vue.js, and Shopify Liquid. During my time at GhostBed, I loved
        being part of the Engineering Team. We worked closely with the Marketing
        Team, which I also enjoyed.
      </p>
      <p>
        I had the privilege of appearing as a guest on{' '}
        <a
          href='https://podcast.thereactshow.com/1764837/12142504'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          The React Show
        </a>{' '}
        <Link href='/podcast' className={textLinkColors}>
          podcast
        </Link>
        !
      </p>
      <p>
        I also enjoy programming languages, such as{' '}
        <a
          href='https://www.rust-lang.org/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Rust
        </a>
        . I&apos;m really enjoying going deeper with Rust.
      </p>
      <p>
        Other than coding, I enjoy rock climbing, fitness, traveling, and pretty
        much anything outdoors. I love spending time with family and friends.
      </p>
    </div>
  )
}
