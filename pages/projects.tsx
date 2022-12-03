// import Projects from 'components/Projects'

export default function Projects() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-y-16'>
      <p className='text-center text-3xl'>
        My latest projects can be found on{' '}
        <a
          href='https://github.com/evan-walter'
          className='text-zinc-400 hover:text-white'
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
            className='text-zinc-400 hover:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            previous portofolio
          </a>
          .
        </span>
      </p>
    </div>
  )
}
