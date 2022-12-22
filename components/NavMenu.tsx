import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobileScreen = useMediaQuery({ query: '(max-width: 640px)' })
  const router = useRouter()

  useEffect(() => {
    function handleRouteChange() {
      setIsMenuOpen(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const handleMediaQueryChange = function (matches: boolean) {
    if (matches) {
      setIsMenuOpen(false)
    }
  }

  useMediaQuery({ maxWidth: 640 }, undefined, handleMediaQueryChange)

  useEffect(() => {
    if (!isMobileScreen) {
      setIsMenuOpen(true)
    }
  }, [isMenuOpen, isMobileScreen])

  return (
    <nav className='container absolute top-0 left-0 right-0 bg-white py-8 dark:bg-zinc-900 max-sm:px-6'>
      <div className='relative flex w-full flex-col items-start justify-between gap-y-3 gap-x-8 rounded-lg bg-white dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-center'>
        <MobileMenuButtons
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {isMenuOpen ? (
          <>
            <NavItem
              href='/'
              text='Home'
              router={router}
              isMobileScreen={isMobileScreen}
              isPage
            />
            <NavItem
              href='/projects'
              text='Projects'
              router={router}
              isMobileScreen={isMobileScreen}
              isPage
            />
            <NavItem
              href='/resume.pdf'
              text='Resume'
              router={router}
              isMobileScreen={isMobileScreen}
              handleClick={() => setIsMenuOpen(false)}
            />
            <NavItem
              href='https://github.com/evan-walter'
              text='GitHub'
              router={router}
              isMobileScreen={isMobileScreen}
              handleClick={() => setIsMenuOpen(false)}
            />
            <NavItem
              href='https://linkedin.com/in/-evanwalter'
              text='LinkedIn'
              router={router}
              isMobileScreen={isMobileScreen}
              handleClick={() => setIsMenuOpen(false)}
            />
            <NavItem
              href='https://twitter.com/_evanwalter_'
              text='Twitter'
              router={router}
              isMobileScreen={isMobileScreen}
              handleClick={() => setIsMenuOpen(false)}
            />
          </>
        ) : null}
        <ThemeButton />
      </div>
    </nav>
  )
}

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        {resolvedTheme === 'dark' ? (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        ) : (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        )}
      </svg>
    </button>
  )
}

interface NavItemProps {
  href: string
  text: string
  router: any
  isMobileScreen: Boolean
  isPage?: Boolean
  handleClick?: () => void
}

function NavItem({
  href,
  text,
  router,
  isMobileScreen,
  isPage,
  handleClick,
}: NavItemProps) {
  const isActive = router.asPath === href
  const classNames = `
    ${
      isMobileScreen
        ? 'w-full border-b border-zinc-700'
        : isActive
        ? 'text-zinc-800 dark:text-white'
        : 'text-zinc-500 dark:text-zinc-400'
    }
    font-semibold dark:hover:text-bg-zinc-900 text-zinc-500 hover:text-zinc-800 dark:hover:text-white max-sm:py-3 sm:w-fit
  `

  return (
    <>
      {isPage ? (
        <Link className={classNames} href={href}>
          {text}
        </Link>
      ) : (
        <a
          href={href}
          className={classNames}
          target='_blank'
          rel='noreferrer noopener'
          onClick={handleClick}
        >
          {text}
        </a>
      )}
    </>
  )
}

interface MobileMenuButtonsProps {
  isMenuOpen: Boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileMenuButtons({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuButtonsProps) {
  function handleClick() {
    setIsMenuOpen((s) => !s)
  }

  return (
    <>
      {isMenuOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          onClick={handleClick}
          className='block h-6 w-6 sm:hidden'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='block h-6 w-6 sm:hidden'
          onClick={handleClick}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      )}
    </>
  )
}
