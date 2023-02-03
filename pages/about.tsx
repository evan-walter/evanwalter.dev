import About from 'components/About'
import Contact from 'components/Contact'

export default function podcast() {
  return (
    <>
      <h1 className='mb-3 text-3xl font-bold sm:text-4xl'>About</h1>
      <About />
      <Contact />
    </>
  )
}
