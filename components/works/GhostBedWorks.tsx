import { useTextLinkContext } from 'components/TextLinkProvider'

export default function GhostBedWorks() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 id='ghostbed' className='text-2xl font-bold sm:text-3xl'>
        GhostBed Highlights
      </h2>
      <GhostBedWork
        url='https://quiz-preview.vercel.app/'
        title='Mattress Quiz with Next.js, React, and TypeScript'
        linkText='Quiz App (Preview)'
      >
        <p>
          I created the mattress quiz from scratch with Next.js, React, and
          TypeScript. I wrote the full implementation with completely new code
          along with some updates to the business logic. We hope to go live with
          the new code I wrote after we complete our migration efforts to a
          headless web application. Feel free to check out the{' '}
          <a
            href='https://www.ghostbed.com/pages/mattress-quiz'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            live version
          </a>{' '}
          built with Vue.js.
        </p>
      </GhostBedWork>
      <GhostBedWork
        url='https://www.ghostbed.com/products/ghostbed-3d-matrix#pdp-layers'
        title='Product Page with Vue.js Layers Component'
        linkText='GhostBed 3D Matrix® Layers Component'
      >
        <p>
          I implemented the design portion of this page shown below the fold. I
          created the mattress layers component with Vue.js, a modern JavaScript
          framework similar to the React library.
        </p>
      </GhostBedWork>
      <GhostBedWork
        url='https://www.ghostbed.com/pages/mattress-firmness-guide-and-scale'
        title='Blog Article with Advanced Graphics'
        linkText='The Ultimate Guide to Mattress Firmness'
      >
        <p>
          On this page, you will find four graphics. I created these graphics
          with advanced, responsive styling patterns with Tailwind CSS,
          including advanced conditionals, grid, flex box, and positioning
          patterns.
        </p>
      </GhostBedWork>
      <GhostBedWork
        url='https://www.ghostbed.com/'
        title='Cart Slider'
        linkText='GhostBed Homepage'
      >
        <p>
          I had the privilege of implementing the cart slider! I added some
          styling touches, such as the hover states and transitional animations
          on the buttons on those components.
        </p>
      </GhostBedWork>
    </div>
  )
}

interface GhostBedWorkProps {
  url: string
  title: string
  linkText: string
  children: React.ReactNode
}

export function GhostBedWork({
  url,
  title,
  linkText,
  children,
}: GhostBedWorkProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='mt-4 flex flex-col gap-y-2 rounded-lg border-2 border-[#5FA405] px-5 py-4'>
      <h3 className='text-xl font-bold sm:text-2xl'>{title}</h3>
      <p>
        Link:{' '}
        <a
          href={url}
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          {linkText}
        </a>
      </p>
      {children}
    </div>
  )
}
