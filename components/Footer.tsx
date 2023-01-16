import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Footer() {
  const linkClassNames =
    'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'

  return (
    <footer className='flex flex-col items-center justify-center gap-y-10 bg-zinc-200 py-10 text-lg dark:bg-zinc-800'>
      <div className='container flex w-full max-w-lg items-center justify-between gap-y-4 max-[375px]:flex-col'>
        <a
          href='/resume.pdf'
          className={linkClassNames}
          target='_blank'
          rel='noreferrer noopener'
        >
          Resume
        </a>
        <a
          href='https://github.com/evan-walter'
          className={linkClassNames}
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/-evanwalter'
          className={linkClassNames}
          target='_blank'
          rel='noreferrer noopener'
        >
          LinkedIn
        </a>
        <a
          href='https://twitter.com/_evanwalter_'
          className={linkClassNames}
          target='_blank'
          rel='noreferrer noopener'
        >
          Twitter
        </a>
        <button title='Building software on the web since 2019'>❤️‍🔥</button>
      </div>
    </footer>
  )
}
