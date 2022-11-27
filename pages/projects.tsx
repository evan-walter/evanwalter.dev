// import Projects from 'components/Projects'

export default function Projects() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-y-20'>
      <p className='text-center text-3xl'>
        My latest projects can currently be found on{' '}
        <a
          href='https://github.com/evan-walter'
          className='text-zinc-400 hover:text-white'
        >
          GitHub
        </a>
        .
      </p>
      <p className='text-center text-3xl'>
        Projects shown directly on this page are coming soon.
      </p>
      <p className='flex flex-col items-center text-center text-2xl'>
        For older projects, please check out my
        <span>
          <a
            href='#'
            className='text-zinc-400 hover:text-white'
            target='_blank'
          >
            previous portofolio
          </a>
          .
        </span>
      </p>
    </div>
  )
}
