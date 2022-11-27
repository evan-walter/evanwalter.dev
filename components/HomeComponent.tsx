import Link from 'next/link'
import Image from 'next/image'

export default function Evan() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-8 sm:flex-row'>
      <Image
        className='rounded-full'
        src='/head-shot.jpg'
        alt='Head Shot'
        width={200}
        height={200}
        priority
      />
      <div className='flex flex-col items-center justify-center gap-y-3 text-center sm:items-start sm:text-left'>
        <h1 className='text-3xl font-bold'>Evan Walter</h1>
        <h2 className='text-3xl font-bold'>Full Stack Engineering</h2>
        <h3 className='text-lg'>
          React | Next.js | Node.js | TypeScript | GraphQL
        </h3>
        <div className='flex gap-x-5 text-lg'>
          <a
            href='https://github.com/evan-walter'
            className='text-zinc-400 hover:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/-evanwalter'
            className='text-zinc-400 hover:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            LinkedIn
          </a>
          <a
            href='/resume.pdf'
            className='text-zinc-400 hover:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
