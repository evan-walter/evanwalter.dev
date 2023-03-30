import Link from 'next/link'
import { useNavLinkContext } from 'components/NavLinkProvider'
import { useRandomQuote } from 'hooks/useRandomQuote'
import Contact from 'components/Contact'

export default function Footer() {
  const navLinkStyles = useNavLinkContext()
  const [randomQuote, getRandomQuote] = useRandomQuote()

  return (
    <footer className='bg-neutral-200 py-10 dark:bg-neutral-800'>
      <div className='container flex w-full max-w-2xl flex-col gap-y-8'>
        <Link href='#' className={`${navLinkStyles} mx-auto p-1`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        </Link>
        <div className='flex items-center justify-between gap-4 max-[379px]:flex-col'>
          <FooterLinksGroup addClassNames='max-[379px]:hidden'>
            <Link href='/' className={navLinkStyles}>
              Home
            </Link>
            <Link href='/#about' className={navLinkStyles}>
              About
            </Link>
            <Link href='/podcast' className={navLinkStyles}>
              Podcast
            </Link>
            <Link href='/works' className={navLinkStyles}>
              Works
            </Link>
          </FooterLinksGroup>
          <FooterLinksGroup addClassNames='max-[379px]:hidden'>
            <Link href='/gpt-model' className={navLinkStyles}>
              GPT
            </Link>
            <a
              href='https://quiz-preview.vercel.app/'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              Quiz App
            </a>
            <a
              href='https://lens-starter-app.vercel.app/'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              Lens Social App
            </a>
            <Link href='/dad-jokes' className={navLinkStyles}>
              Dad Jokes
            </Link>
          </FooterLinksGroup>
          <FooterLinksGroup>
            <a
              href='/resume.pdf'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              Resume
            </a>
            <a
              href='https://github.com/evan-walter'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              GitHub
            </a>
            <a
              href='https://linkedin.com/in/-evanwalter'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              LinkedIn
            </a>
            <a
              href='https://twitter.com/_evanwalter_'
              className={navLinkStyles}
              target='_blank'
              rel='noreferrer noopener'
            >
              Twitter
            </a>
          </FooterLinksGroup>
        </div>
        <Contact />
        <div className='group mx-auto flex w-fit flex-col justify-center gap-y-2'>
          <button onMouseEnter={() => getRandomQuote()} className='text-2xl'>
            💻
          </button>
          <div className='flex flex-col gap-y-2 text-center opacity-0 transition duration-700 group-hover:opacity-100 group-hover:ease-in-out'>
            <i>&quot;{randomQuote.body}&quot;</i>
            <i>- {randomQuote.author}</i>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinksGroupProps {
  addClassNames?: string
  children: React.ReactNode
}

export function FooterLinksGroup({
  addClassNames,
  children,
}: FooterLinksGroupProps) {
  return (
    <div
      className={`${addClassNames} flex flex-col items-center justify-start gap-y-4`}
    >
      {children}
    </div>
  )
}
