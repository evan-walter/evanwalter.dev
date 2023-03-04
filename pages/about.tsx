import About from 'components/About'

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-3xl font-bold sm:text-4xl'>About</h1>
      <div className='flex flex-col gap-y-2'>
        <About />
      </div>
    </div>
  )
}
