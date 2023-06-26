import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

interface PageReferenceProps {
  page: string
}

export default function PageReference({ page }: PageReferenceProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <p className='text-lg'>
      If you&apos;d like to{' '}
      {page === 'works' ? 'see some of my projects' : 'learn more about me'},
      check out the{' '}
      <Link href={`/${page}`} className={textLinkColors}>
        {page}
      </Link>{' '}
      page.
    </p>
  )
}
