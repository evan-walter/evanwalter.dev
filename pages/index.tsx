import Head from 'next/head'
import HomeComponent from 'components/HomeComponent'

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

      <main>
        <HomeComponent />
      </main>

      <footer></footer>
    </>
  )
}
