import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='absolute flex w-full items-center justify-between py-8'>
      <NavGroup>
        <NavItem link='/' text='Home' />
        <NavItem link='/resume' text='Resume' />
        <NavItem link='/projects' text='Projects' />
      </NavGroup>
      <NavGroup>
        <a
          href='https://github.com/evan-walter'
          className='hover:text-zinc-300'
          target='_blank'
        >
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/-evanwalter'
          className='hover:text-zinc-300'
          target='_blank'
        >
          LinkedIn
        </a>
      </NavGroup>
    </nav>
  )
}

interface NavGroupProps {
  children: React.ReactNode
}

export function NavGroup({ children }: NavGroupProps) {
  return (
    <div className='flex items-center justify-center gap-x-8'>{children}</div>
  )
}

interface NavItemProps {
  link: string
  text: string
}

export function NavItem({ link, text }: NavItemProps) {
  return (
    <Link className='hover:text-zinc-300' href={link}>
      {text}
    </Link>
  )
}
