import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Footer() {
  const textLinkColors = useTextLinkContext()

  return (
    <footer className='flex flex-col items-center justify-center gap-y-10 bg-zinc-200 py-10 dark:bg-zinc-800'>
      <div className='container flex w-full max-w-2xl items-center justify-between gap-4 max-[375px]:flex-col'>
        <FooterLinksGroup>
          <Link href='/' className={textLinkColors}>
            Home
          </Link>
          <Link href='/podcast' className={textLinkColors}>
            Podcast
          </Link>
          <Link href='/works' className={textLinkColors}>
            Works
          </Link>
          <Link href='/about' className={textLinkColors}>
            About
          </Link>
        </FooterLinksGroup>
        <FooterLinksGroup>
          <a
            href='https://lens-starter-app.vercel.app/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Lens Social App
          </a>
          <Link href='/synth' className={textLinkColors}>
            Synth
          </Link>
          <Link href='/dad-jokes' className={textLinkColors}>
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
        </FooterLinksGroup>
        <FooterLinksGroup>
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
          <div className='invisible max-[374px]:hidden'>Home</div>
        </FooterLinksGroup>
      </div>
      <div className='group flex flex-col justify-center gap-y-2'>
        <button title='Building software on the web since 2019'>❤️‍🔥</button>
        <p className='rounded-full border border-orange-500 px-4 py-2 text-center opacity-0 transition duration-700 group-hover:opacity-100 group-hover:ease-in-out dark:border-yellow-500'>
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
