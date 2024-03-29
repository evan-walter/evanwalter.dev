import { useNavLinkContext } from 'components/NavLinkProvider'

interface MobileMenuButtonsProps {
  isMenuOpen: Boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenuButtons({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuButtonsProps) {
  const navLinkStyles = useNavLinkContext()

  return (
    <button
      aria-label='Toggle Menu'
      type='button'
      className={`${navLinkStyles} py-1 pr-1`}
      onClick={() => setIsMenuOpen((s) => !s)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='h-6 w-6 sm:hidden'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d={
            isMenuOpen
              ? 'M6 18L18 6M6 6l12 12'
              : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          }
        />
      </svg>
    </button>
  )
}
