import Link from 'next/link'
import Image from 'next/image'
import { useTextLinkContext } from 'components/TextLinkProvider'
import PageReference from 'components/PageReference'
import About from 'components/About'
import Gpt3Announcement from 'components/works/Gpt3Announcement'

export default function Home() {
  const textLinkColors = useTextLinkContext()

  return (
    <>
      <main className='flex flex-col gap-y-8'>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <Image
            className='rounded-full'
            src='/head-shot.jpg'
            alt='Evan Walter | Front End Engineering'
            width={200}
            height={200}
            priority
          />
          <div className='flex flex-col items-center justify-center gap-y-3 text-center md:items-start md:text-left'>
            <h1 className='text-3xl font-bold md:whitespace-nowrap md:text-4xl'>
              Evan Walter
            </h1>
            <h2 className='text-3xl font-bold md:whitespace-nowrap md:text-4xl'>
              Front End Engineering
            </h2>
            <h3 className='md:whitespace-nowrap'>
              React | Next.js | Node.js | TypeScript | GraphQL
            </h3>
            <div className='flex gap-x-5 gap-y-3 max-md:flex-wrap max-md:justify-center'>
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

        <p className='italic max-md:text-center'>
          I created this{' '}
          <a
            href='https://github.com/evan-walter/evanwalter.dev/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            open-source
          </a>{' '}
          web app, evanwalter.dev, with the tech stack above. I recently added
          test coverage with Cypress!
        </p>

        <div className='flex flex-col items-center justify-center gap-y-6'>
          <Gpt3Announcement addClassNames={'from-blue-500 via-purple-500 to-pink-500'} />
        </div>

        <PageReference page={'works'} />

        <PageReference page={'about'} />
      </main>
    </>
  )
}
