import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileMenuButtons from 'components/MobileMenuButtons'
import ThemeButton from 'components/ThemeButton'
import { useNavLinkContext } from 'components/NavLinkProvider'

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
  }, [isMobileScreen, isMenuOpen])

  return (
    <nav className='container absolute inset-x-0 top-0 z-50 max-w-2xl bg-white py-5 text-lg dark:bg-neutral-900'>
      <div
        className={`${
          isMobileScreen && isMenuOpen ? 'pb-4' : ''
        } flex w-full items-center justify-between`}
      >
        <MobileMenuButtons
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {isMobileScreen ? <ThemeButton /> : null}
      </div>
      {isMenuOpen ? (
        <div className='flex w-full items-start justify-between gap-y-3 max-sm:flex-col sm:items-center'>
          <NavItem
            href='/'
            text='Home'
            router={router}
            isMobileScreen={isMobileScreen}
            isInternal
            handleClick={() => setIsMenuOpen(false)}
          />
          <NavItem
            href='/#about'
            text='About'
            router={router}
            isMobileScreen={isMobileScreen}
            isInternal
            handleClick={() => setIsMenuOpen(false)}
          />
          <NavItem
            href='/works'
            text='Works'
            router={router}
            isMobileScreen={isMobileScreen}
            isInternal
          />
          <NavItem
            href='/podcast'
            text='Podcast'
            router={router}
            isMobileScreen={isMobileScreen}
            isInternal
          />
          <NavItem
            href='/gpt-model'
            text='GPT'
            router={router}
            isMobileScreen={isMobileScreen}
            isInternal
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
  isInternal?: Boolean
  handleClick?: () => void
}

function NavItem({
  href,
  text,
  router,
  isMobileScreen,
  isInternal,
  handleClick,
}: NavItemProps) {
  const navLinkStyles = useNavLinkContext()
  const isActive = router.asPath === href
  const classNames = `
    ${
      isMobileScreen
        ? 'w-full border-b border-neutral-700 p-1 text-black dark:text-white'
        : isActive
        ? 'p-1 text-black dark:text-white'
        : navLinkStyles
    }
    scroll-smooth font-semibold max-sm:py-3 sm:w-fit'
  `

  return (
    <>
      {isInternal ? (
        <Link className={classNames} href={href} onClick={handleClick}>
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
