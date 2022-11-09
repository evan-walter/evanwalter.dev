import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Evan Walter | Full Stack Engineer</title>
        <meta
          name='description'
          content='React | Next.js | Node.js | TypeScript | GraphQL'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className='text-3xl underline'>Hello, world!</main>

      <footer></footer>
    </>
  )
}
