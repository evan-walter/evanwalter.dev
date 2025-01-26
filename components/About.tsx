import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2 text-lg'>
      <p className='first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold'>
        I am a Full-Stack Software Engineer. I have a high value for learning
        and offering valuable contribution as a team member. I specialize in
        TypeScript, React, and Tailwind CSS. With a background in Electrical
        Engineering, I offer a unique attention to detail and creativity in
        problem solving.
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
        I also enjoy exploring programming languages like{' '}
        <a
          href='https://www.rust-lang.org/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Rust
        </a>{' '}
        and{' '}
        <a
          href='https://go.dev/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Go
        </a>
        .
      </p>
      <p>
        Other than coding, I enjoy fitness, traveling, outdoor activities, and
        spending time with family and friends.
      </p>
    </div>
  )
}
