import { useTextLinkContext } from './TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>About</h2>
      <p>I&apos;d like to share a little about myself and what I am up to.</p>
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
        . For now, most of my work at GhostBed is front-end-focused. I enjoy
        working with the full stack, the front end, and the back end. We
        primarily use Vue.js with TailwindCSS. We also use Next.js, React,
        TypeScript, GraphQL, CraftCMS, and TailwindCSS as we migrate to this
        headless tech stack. I focus most of my personal learning and side
        projects on Next.js, React, TypeScript, GraphQL, and TailwindCSS. I
        created this website you&apos;re on,{' '}
        <a
          href='https://github.com/evan-walter/evanwalter.dev'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          evanwalter.dev
        </a>
        , with this tech stack. I hope to work with this tech stack or a very
        similar one as a full stack engineer.
      </p>
      <p>
        In my spare time, I&apos;ve built several complete full stack web
        applications. I&apos;ve also started to build a full stack social media
        web app,{' '}
        <a
          href='https://github.com/evan-walter/baseline'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Baseline
        </a>
        , with Express.js, React, and GraphQL. I&apos;m currently building
        another full stack social media app,{' '}
        <a
          href='https://github.com/evan-walter/connector-social-media-app'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Connector
        </a>
        , with Next.js, React, TypeScript, GraphQL, and TailwindCSS. Here are a
        couple interesting features I want to implement.
      </p>
      <ul className='mb-2 list-outside list-disc px-6'>
        <li>
          Ability for users to sort their own posts and display other
          users&apos; posts based on number of likes, number of comments, and
          other parameters
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
        paddle boarding, hiking, and pretty much anything outdoors. And, of
        course, I like to take it easy and hang out with family and friends.
      </p>
    </div>
  )
}
