import Link from 'next/link'
import Image from 'next/image'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Home() {
  const textLinkColors = useTextLinkContext()

  return (
    <>
      <main className='flex h-full w-full flex-col items-center pt-28'>
        <div className='flex flex-col items-center justify-center gap-8 sm:flex-row'>
          <Image
            className='rounded-full'
            src='/head-shot.jpg'
            alt='Evan Walter | Full Stack Engineering'
            width={200}
            height={200}
            priority
          />
          <div className='flex flex-col items-center justify-center gap-y-3 text-center sm:items-start sm:text-left'>
            <h1 className='text-4xl font-bold'>Evan Walter</h1>
            <h2 className='text-4xl font-bold'>Full Stack Engineering</h2>
            <h3 className='text-lg'>
              React | Next.js | Node.js | TypeScript | GraphQL
            </h3>
            <div className='flex flex-wrap justify-center gap-x-5 text-lg'>
              <a
                href='/resume.pdf'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                Resume
              </a>
              <a
                href='https://github.com/evan-walter/'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/-evanwalter/'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                LinkedIn
              </a>
              <a
                href='https://twitter.com/_evanwalter_/'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div>
          I created this personal website using{' '}
          <a
            href='https://nextjs.org/'
            className={textLinkColors}
            target='_blank'
          >
            Next.js
          </a>
          . Feel free check out the{' '}
          <a
            href='https://github.com/evan-walter/evanwalter.dev/'
            className={textLinkColors}
            target='_blank'
          >
            source code
          </a>
          !
        </div>
        <div>
          <p>
            Hello, here's a little bit about me and what I'm up to these days.
          </p>
          <p>I'm a full time Web Developer at GhostBed.</p>
          <p>
            In my spare time, I'm working on side projects (such as this
            portfolio)
          </p>
        </div>
      </main>
    </>
  )
}
