import Head from 'next/head'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { createContext, useContext } from 'react'
import NavMenu from 'components/NavMenu'

const TextLinkContext = createContext(
  'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
)

export default function App({ Component, pageProps }: AppProps) {
  const textLinkColors = useContext(TextLinkContext)

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

      <ThemeProvider attribute='class'>
        <div className='container relative h-screen min-h-[45rem] max-w-2xl sm:min-h-[35rem]'>
          <TextLinkContext.Provider value={textLinkColors}>
            <NavMenu />
            <Component {...pageProps} />
          </TextLinkContext.Provider>
        </div>

        <footer className='flex flex-col items-center justify-center gap-y-10 bg-zinc-100 py-10 dark:bg-zinc-800'>
          <div className='container flex flex-col items-center justify-center'>
            <button title='Building software on the web since 2019'>❤️‍🔥</button>
          </div>
        </footer>
      </ThemeProvider>
    </>
  )
}
