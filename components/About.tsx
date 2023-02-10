import { useTextLinkContext } from 'components/TextLinkProvider'

export default function About() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2 text-lg'>
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
        . I love getting to learn, grow, and build with this amazing team! I am
        part of a team of three developers, including my boss. We work closely
        with the marketing team. I enjoy getting to work with other departments
        in this way&mdash;mainly because they are super cool people&mdash;but
        also because I enjoy getting a better glimpse of how the magic happens
        in our business.
      </p>
      <p>
        For now, most of my work at GhostBed is front-end-focused. I enjoy
        working with the full stack, the front end, and the back end. We
        primarily use Vue.js with TailwindCSS. We also use Next.js, React,
        TypeScript, GraphQL, CraftCMS, and TailwindCSS as we migrate to this
        headless tech stack. I focus most of my personal learning and side
        projects on Next.js, React, TypeScript, GraphQL, and TailwindCSS. I
        created this web app you&apos;re on,{' '}
        <a
          href='https://github.com/evan-walter/evanwalter.dev'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          evanwalter.dev
        </a>
        , with this tech stack. I hope to work with this tech stack or a similar
        one as a front end or full stack engineer.
      </p>
      <p>
        I recently had the privilege of appearing as a guest on{' '}
        <a
          href='https://podcast.thereactshow.com/1764837/12142504'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          The React Show
        </a>
        ! On the show, I share about my journey into web development, React
        nuances, and networking, and banter.
      </p>
      <p>
        In my spare time, I&apos;ve also started to build a{' '}
        <a
          href='https://lens-starter-app.vercel.app/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          social media web app
        </a>{' '}
        with Next.js, React, GraphQL, TailwindCSS, and the Lens Protocol. I plan
        to add to this app in the near future. Here are a couple interesting
        features I want to implement.
      </p>
      <ul className='mb-2 list-outside list-disc px-6'>
        <li>Authentication</li>
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
