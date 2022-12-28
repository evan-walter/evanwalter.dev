import { useTextLinkContext } from './TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='mb-1 text-4xl font-bold max-sm:text-center'>About</h2>
      <p>Here&apos;s a little about me and what I&apos;m up to these days.</p>
      <p>
        I&apos;m a full time Web Developer at{' '}
        <a
          href='https://www.ghostbed.com/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GhostBed
        </a>
        .
      </p>
      <p>
        In my spare time, I&apos;ve built a couple full stack social media web
        apps with Express.js and React. I&apos;m currently building a new one
        with Next.js, React, TypeScript, GraphQL, and TailwindCSS. Here are a
        couple interesting features and things I&apos;d like to implement.
      </p>
      <ul className='list-outside list-disc px-6'>
        <li>
          Ability to sort posts based on number of likes, number of comments,
          and other parameters.
        </li>
        <li>Full test coverage</li>
      </ul>
    </div>
  )
}
