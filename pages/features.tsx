import { useTextLinkContext } from 'components/TextLinkProvider'
import Features from 'components/Features'

export default function FeaturesPage() {
  const textLinkColors = useTextLinkContext()

  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl'>Features</h1>
      <p className='mt-3 mb-8'>
        I&apos;d like to discuss features I&apos;ve added to this website along
        with features I plan to add in the future.
      </p>
      <Features />
    </>
  )
}
