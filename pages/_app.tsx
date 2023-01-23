import Head from 'next/head'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NavLinkProvider from 'components/NavLinkProvider'
import TextLinkProvider from 'components/TextLinkProvider'
import NavMenu from 'components/NavMenu'
import Footer from 'components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Evan Walter | Full Stack Engineering</title>
        <meta
          name='description'
          content='Full Stack Engineer with 3+ years of experience. Specialize in React, Next.js, Node.js, TypeScript, and GraphQL. Enjoy building scalable web infrastructure with excellent user interfaces. Passionate about open source and developer tooling.'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <ThemeProvider attribute='class'>
        <div className='container'>
          <div className='mx-auto min-h-[45rem] max-w-2xl pb-16 sm:min-h-[35rem]'>
            <NavLinkProvider>
              <NavMenu />
            </NavLinkProvider>
            <div className='pt-32'>
              <TextLinkProvider>
                <Component {...pageProps} />
              </TextLinkProvider>
            </div>
          </div>
        </div>

        <Footer />
      </ThemeProvider>
    </>
  )
}
