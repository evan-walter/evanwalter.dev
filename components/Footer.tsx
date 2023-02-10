import Link from 'next/link'
import { useNavLinkContext } from 'components/NavLinkProvider'

export default function Footer() {
  const navLinkColors = useNavLinkContext()

  return (
    <footer className='flex flex-col items-center justify-center py-10 gap-y-10 bg-zinc-200 dark:bg-zinc-800'>
      <div className='container flex w-full max-w-2xl items-center justify-between gap-4 max-[375px]:flex-col'>
        <FooterLinksGroup>
          <Link href='/' className={navLinkColors}>
            Home
          </Link>
          <Link href='/podcast' className={navLinkColors}>
            Podcast
          </Link>
          <Link href='/works' className={navLinkColors}>
            Works
          </Link>
          <Link href='/about' className={navLinkColors}>
            About
          </Link>
        </FooterLinksGroup>
        <FooterLinksGroup>
          <a
            href='https://quiz-preview.vercel.app/'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Quiz App
          </a>
          <a
            href='https://lens-starter-app.vercel.app/'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Lens Social App
          </a>
          <Link href='/dad-jokes' className={navLinkColors}>
            Dad Jokes
          </Link>
          <a
            href='/resume.pdf'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Resume
          </a>
        </FooterLinksGroup>
        <FooterLinksGroup>
          <a
            href='https://github.com/evan-walter'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/-evanwalter'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            LinkedIn
          </a>
          <a
            href='https://twitter.com/_evanwalter_'
            className={navLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Twitter
          </a>
          <div className='invisible max-[374px]:hidden'>Home</div>
        </FooterLinksGroup>
      </div>
      <div className='flex flex-col justify-center group gap-y-2'>
        <button title='Building software on the web since 2019'>❤️‍🔥</button>
        <p className='px-4 py-2 text-center transition duration-700 border border-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:ease-in-out dark:border-yellow-500'>
          Building software on the web since 2019
        </p>
      </div>
    </footer>
  )
}

interface FooterLinksGroupProps {
  children: React.ReactNode
}

export function FooterLinksGroup({ children }: FooterLinksGroupProps) {
  return (
    <div className='flex flex-col items-center justify-start gap-y-4'>
      {children}
    </div>
  )
}
