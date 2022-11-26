import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='container relative mx-auto'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
