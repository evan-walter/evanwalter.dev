import Link from 'next/link'
import Image from 'next/image'
import { useTextLinkContext } from 'components/TextLinkProvider'
import PageReference from 'components/PageReference'
import About from 'components/About'
import GptAnnouncement from 'components/works/GptAnnouncement'

export default function Home() {
  const textLinkColors = useTextLinkContext()

  return (
    <>
      <main className='flex flex-col gap-y-8'>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='group relative'>
            <div className='absolute -inset-[0.25rem] h-[13rem] w-[13rem] animate-pulse rounded-full bg-orange-400 blur transition duration-300 group-hover:bg-orange-600 max-[248px]:hidden'></div>
            <div className='absolute -inset-[0.25rem] h-[13rem] w-[13rem] animate-pulse rounded-full bg-orange-600 blur max-[248px]:hidden'></div>
            <Image
              className='relative rounded-full transition'
              src='/head-shot.jpg'
              alt='Evan Walter | Software Engineering'
              width={200}
              height={200}
              priority
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-y-3 text-center md:items-start md:text-left'>
            <h1 className='text-3xl font-bold md:whitespace-nowrap md:text-4xl'>
              Evan Walter
            </h1>
            <h2 className='text-3xl font-bold md:whitespace-nowrap md:text-4xl'>
              Software Engineering
            </h2>
            <h3 className='md:whitespace-nowrap'>
              Full Stack | Front End | Back End | Interested in Rust 🦀
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
          web app with Next.js, React and TypeScript. I recently started to add
          test coverage with Cypress!
        </p>

        <div className='flex flex-col gap-y-3'>
          <h2 id='about' className='text-3xl font-bold sm:text-4xl'>
            About
          </h2>
          <About />
        </div>

        <div className='flex flex-col gap-y-3'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Announcement</h2>
          <div className='flex flex-col items-center justify-center gap-y-6'>
            <GptAnnouncement
              addClassNames={'from-blue-500 via-purple-500 to-pink-500'}
            />
          </div>
        </div>

        <PageReference page={'works'} />
      </main>
    </>
  )
}
