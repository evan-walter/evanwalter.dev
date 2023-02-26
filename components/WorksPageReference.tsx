import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function WorksPageReference() {
  const textLinkColors = useTextLinkContext()

  return (
    <p className='text-lg'>
      If you&apos;re curious about more of my works, please visit my{' '}
      <Link href='/works' className={textLinkColors}>
        works
      </Link>{' '}
      page.
    </p>
  )
}
