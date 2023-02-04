import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Footer() {
  const textLinkColors = useTextLinkContext()

  return (
    <footer className='flex flex-col items-center justify-center gap-y-10 bg-zinc-200 py-10 text-lg dark:bg-zinc-800'>
      <div className='container flex w-full max-w-lg items-center justify-between gap-y-4 max-[375px]:flex-col'>
        <Link href='/dadjokes' className={textLinkColors}>
          Dad Jokes
        </Link>
        <a
          href='/resume.pdf'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Resume
        </a>
        <a
          href='https://github.com/evan-walter'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/-evanwalter'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          LinkedIn
        </a>
        <a
          href='https://twitter.com/_evanwalter_'
          className={textLinkColors}
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
