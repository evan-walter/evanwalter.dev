import Link from 'next/link'
import Image from 'next/image'
import headShot from 'assets/head-shot.jpg'

export default function Evan() {
  return (
    <div className='flex h-screen w-full items-center justify-center gap-x-8'>
      <Image
        className='rounded-full'
        src={headShot}
        alt='Head Shot'
        width={200}
        height={200}
      />
      <div>
        <h1 className='pb-3 text-3xl font-bold'>Evan Walter</h1>
        <h2 className='pb-0.5 text-3xl font-bold'>Full Stack Engineering</h2>
        <h3 className='pb-3 text-lg'>
          React | Next.js | Node.js | TypeScript | GraphQL
        </h3>
        <div className='flex gap-x-4 text-lg'>
          <a
            href='https://github.com/evan-walter'
            className='hover:text-zinc-300'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/-evanwalter'
            className='hover:text-zinc-300'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
