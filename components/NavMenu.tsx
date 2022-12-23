import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileMenuButtons from './MobileMenuButtons'
import ThemeButton from './ThemeButton'

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
    <nav className='container absolute inset-x-0 top-0 max-w-2xl bg-white py-8 dark:bg-zinc-900'>
      <div
        className={`${
          isMenuOpen ? 'pb-3' : ''
        } flex w-full items-center justify-between`}
      >
        <MobileMenuButtons
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {isMobileScreen ? <ThemeButton /> : null}
      </div>
      {isMenuOpen ? (
        <div className='flex w-full items-start justify-between gap-y-3 gap-x-8 max-sm:flex-col sm:items-center'>
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
          {isMobileScreen ? null : <ThemeButton />}
        </div>
      ) : null}
    </nav>
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
        ? 'w-full border-b border-zinc-700 text-black dark:text-white'
        : isActive
        ? 'text-black dark:text-white'
        : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
    }
    font-semibold max-sm:py-3 sm:w-fit
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
