import { useTextLinkContext } from './TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>About</h2>
      <p>Here&apos;s a little about me and what I&apos;m up to these days.</p>
      <p>
        I am a Web Developer at{' '}
        <a
          href='https://www.ghostbed.com/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GhostBed
        </a>
        . Most of my work here is front-end focused. We currently use Vue.js
        with TailwindCSS. We are migrating to a headless stack with Next.js,
        React, TypeScript, GraphQL, and TailwindCSS. I hope to work with a tech
        stack such as this one as a full stack engineer. I focus the majority of
        my personal learning and side projects on this tech stack.
      </p>
      <p>
        In my spare time, I&apos;ve built several complete full stack web
        applications. I&apos;ve also started to build a couple full stack social
        media web apps with Express.js and React. I&apos;m currently building
        one with Next.js, React, TypeScript, GraphQL, and TailwindCSS. Here are
        a couple interesting features and things I want to implement.
      </p>
      <ul className='mb-2 list-outside list-disc px-6'>
        <li>
          Ability for users to sort their own posts and display other
          users&apos; posts based on number of likes, number of comments, and
          other parameters.
        </li>
        <li>Full test coverage</li>
      </ul>
      <p>
        Aside from this tech stack,{' '}
        <a
          href='https://www.rust-lang.org/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Rust
        </a>{' '}
        intrigues me, and I want to explore learning it sometime.{' '}
      </p>
      <p>
        I also really enjoy rock climbing, traveling, fitness, music, surfing,
        paddle boarding, hiking, and pretty much anything outdoors. And of
        course I like to take it easy and hang out with family and friends.
      </p>
    </div>
  )
}
