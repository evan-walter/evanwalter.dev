import About from 'components/About'
import Contact from 'components/Contact'

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-1 text-3xl font-bold sm:text-4xl'>About</h1>
        <About />
      </div>

      <Contact />
    </div>
  )
}
