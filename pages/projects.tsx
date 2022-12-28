import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Projects() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex h-full w-full flex-col gap-y-16 pt-28'>
      <p className='text-center text-3xl'>
        My latest projects can be found on{' '}
        <a
          href='https://github.com/evan-walter'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
        .
      </p>
      <p className='text-center text-3xl'>
        Linking these projects directly on this page is coming soon.
      </p>
      <p className='flex flex-col items-center text-center text-2xl'>
        For older projects, please check out my
        <span>
          <a
            href='https://previous.evanwalter.dev'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            previous portfolio
          </a>
          .
        </span>
      </p>
    </div>
  )
}
