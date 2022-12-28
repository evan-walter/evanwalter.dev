import { useTextLinkContext } from './TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2 text-lg'>
      <h2 className='text-4xl font-bold'>About</h2>
      <p>Hello, here's a little bit about me and what I'm up to these days.</p>
      <p>
        I'm a full time Web Developer at{' '}
        <a
          href='https://www.ghostbed.com/'
          className={textLinkColors}
          target='_blank'
        >
          GhostBed
        </a>
        .
      </p>
      <p>
        In my spare time, I'm building a full stack social media web app with
        Next.js, React, TypeScript, GraphQL, and TailwindCSS. Here are a few
        interesting features and things I'd like to implement.
      </p>
      <ul className='list-outside list-disc px-8'>
        <li>
          Ability to sort posts based on number of likes, number of comments,
          and other parameters.
        </li>
        <li>Full test coverage</li>
      </ul>
    </div>
  )
}
