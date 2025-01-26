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
      {page === 'works' ? (
        <span>
          see some smaller projects I&apos;ve contributed to as well as projects
          I&apos;ve created
        </span>
      ) : (
        <span>learn more about me</span>
      )}
      , check out the{' '}
      <Link href={`/${page}`} className={textLinkColors}>
        {page}
      </Link>{' '}
      page.
    </p>
  )
}
