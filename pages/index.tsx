import Link from 'next/link'
import Image from 'next/image'
import { useTextLinkContext } from 'components/TextLinkProvider'
import About from 'components/About'
import Features from 'components/Features'

export default function Home() {
  const textLinkColors = useTextLinkContext()

  return (
    <>
      <main className='flex h-full w-full flex-col gap-y-8 pt-32 text-lg'>
        <div className='mb-8 flex flex-col items-center justify-center gap-8 sm:flex-row'>
          <Image
            className='rounded-full'
            src='/head-shot.jpg'
            alt='Evan Walter | Full Stack Engineering'
            width={200}
            height={200}
            priority
          />
          <div className='flex flex-col items-center justify-center gap-y-3 text-center sm:items-start sm:text-left'>
            <h1 className='text-3xl font-bold sm:whitespace-nowrap sm:text-4xl'>
              Evan Walter
            </h1>
            <h2 className='text-3xl font-bold sm:whitespace-nowrap sm:text-4xl'>
              Full Stack Engineering
            </h2>
            <h3 className='sm:whitespace-nowrap'>
              React | Next.js | Node.js | TypeScript | GraphQL
            </h3>
            <div className='flex gap-x-5 max-sm:flex-wrap max-sm:justify-center'>
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
              <a
                href='https://github.com/evan-walter/evanwalter.dev/'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <About />
        <Features />
        <p>
          For now, if you have any questions or want to get in touch, please
          reach out to me on{' '}
          <a
            href='https://linkedin.com/in/-evanwalter/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href='https://twitter.com/_evanwalter_/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Twitter
          </a>
          !
        </p>
      </main>
    </>
  )
}
