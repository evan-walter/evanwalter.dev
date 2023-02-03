import { useTextLinkContext } from './TextLinkProvider'

export default function GhostBedWorks() {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-2xl font-bold sm:text-3xl'>GhostBed Highlights</h2>
      <p>Below are a few of my contributions at my current role at GhostBed.</p>
      <GhostBedWork
        url='https://www.ghostbed.com/pages/mattress-quiz'
        title='Mattress Quiz with Next.js, React, and TypeScript'
        description='I created the mattress quiz from scratch with Next.js, React, and TypeScript. The version you see on this page was created with Vue.js. This version was my starting point, and I wrote the full implementation with completely new code along with some updates to the business logic. We hope to go live with the new code I wrote after we complete our migration efforts to a headless web application.'
      />
      <GhostBedWork
        url='https://www.ghostbed.com/products/ghostbed-3d-matrix#pdp-layers'
        title='Product Page with Vue.js Layers Component'
        description='I implemented the design portion of this page shown below the fold. I created the mattress layers component with Vue.js, a modern JavaScript framework similar to the React library.'
      />
      <GhostBedWork
        url='https://www.ghostbed.com/pages/mattress-firmness-guide-and-scale'
        title='Blog Article with Advanced Graphics'
        description='On this page, you will find four graphics. I created these graphics with advanced, responsive CSS patterns with TailwindCSS, including advanced conditionals, grid, flex box, and positioning patterns.'
      />
    </div>
  )
}

interface GhostBedWorkProps {
  url: string
  title: string
  description: string
}

export function GhostBedWork({ url, title, description }: GhostBedWorkProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='mt-4 flex flex-col gap-y-2 rounded-lg border-2 border-[#5FA405] px-5 py-4'>
      <h3>
        <a
          href={url}
          className={`${textLinkColors} text-xl font-bold sm:text-2xl`}
          target='_blank'
          rel='noreferrer noopener'
        >
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  )
}
