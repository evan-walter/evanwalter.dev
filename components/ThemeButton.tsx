import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useNavLinkContext } from 'components/NavLinkProvider'

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const navLinkStyles = useNavLinkContext()

  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted ? (
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className={`${navLinkStyles} py-1 pl-1`}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            className='mx-auto h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={
                resolvedTheme === 'dark'
                  ? 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  : 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              }
            />
          </svg>
        </button>
      ) : null}
    </>
  )
}
