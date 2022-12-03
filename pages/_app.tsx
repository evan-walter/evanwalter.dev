import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Evan Walter | Full Stack Engineering</title>
        <meta
          name='description'
          content='React | Next.js | Node.js | TypeScript | GraphQL'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <div className='container relative mx-auto h-screen min-h-[35rem] px-4'>
        <Navbar />
        <Component {...pageProps} />
      </div>

      <footer className='flex flex-col items-center justify-center gap-y-10 bg-zinc-800 py-10'>
        <div className='container mx-auto flex flex-col items-center justify-center px-4'>
          <button title='Building software on the web since 2019'>❤️‍🔥</button>
        </div>
      </footer>
    </>
  )
}
