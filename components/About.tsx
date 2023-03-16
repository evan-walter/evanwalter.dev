import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import PageReference from 'components/PageReference'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2 text-lg'>
      <p className='first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold'>
        I am a Front End Engineer and a Web Developer at{' '}
        <a
          href='https://www.ghostbed.com/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GhostBed
        </a>
        . We primarily work with the tech stack above along with Vue.js,
        Shopify, and Craft CMS. I love being part of our engineering team! We
        work closely with the marketing team, which I also love. They&apos;re
        fun, and I enjoy learning how our business works.
      </p>
      <p>
        Recently, I had the privilege of appearing as a guest on{' '}
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
        I also enjoy programming languages. To grow my skills and satisfy my
        curiosity, I started learning{' '}
        <a
          href='https://www.rust-lang.org/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Rust
        </a>
        .
      </p>
      <p>
        Other than coding, I really enjoy rock climbing, fitness, traveling, and
        pretty much anything outdoors. And I love spending time with family and
        friends.
      </p>
    </div>
  )
}
