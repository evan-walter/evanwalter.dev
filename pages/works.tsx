import { v4 as uuidv4 } from 'uuid'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Features from 'components/Features'
import GptAnnouncement from 'components/works/GptAnnouncement'
import DadJokesAnnouncement from 'components/works/DadJokesAnnouncement'
import SynthAnnouncement from 'components/works/SynthAnnouncement'
import LensStarterAppAnnouncement from 'components/works/LensStarterAppAnnouncement'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8 text-lg'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-2 text-3xl font-bold md:text-4xl'>Works</h1>

        <div className='flex flex-col gap-y-2'>
          <h2 id='ghostbed' className='text-2xl font-bold sm:text-3xl'>
            GhostBed Highlights
          </h2>
          {[
            {
              url: 'https://quiz-preview.vercel.app/',
              title: 'Sales Funnel with Next.js, React, and TypeScript',
              linkText: 'Sales Funnel (Preview)',
              body: `I created the sales funnel from scratch with Next.js, React, and
              TypeScript. I wrote the full implementation with completely new
              code along with some updates to the business logic. We hope to go
              live with the new code I wrote after we complete our migration
              efforts to a headless web application. Feel free to check out the ${(
                <a
                  href='https://www.ghostbed.com/pages/mattress-quiz'
                  className={textLinkColors}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  live version
                </a>
              )} built with Vue.js.`,
            },
            {
              url: 'https://ghostbed.com/products/ghostbed-massage-mattress',
              title: 'GhostBed Massage Mattress Product Page',
              linkText: 'GhostBed Massage Mattress',
              body: 'I created this entire new product page using Vue.js, above-the-fold and below-the-fold, including the interactive dynamic components and mobile-responsive graphics. I worked closely with the Design Team and Marketing Teams to meet the requirements and deliver on time.',
            },
            {
              url: 'https://www.ghostbed.com/products/ghostbed-3d-matrix#pdp-layers',
              title: 'Product Page with Vue.js Layers Component',
              linkText: 'GhostBed 3D Matrix® Layers Component',
              body: 'I implemented the design portion of this page shown below the fold, including the mattress layers component with Vue.js',
            },
            {
              url: 'https://www.ghostbed.com/pages/mattress-firmness-guide-and-scale',
              title: 'Blog Article with Advanced Graphics',
              linkText: 'The Ultimate Guide to Mattress Firmness',
              body: 'On this page, you will find four graphics. I created these graphics with advanced, responsive styling patterns with Tailwind CSS, including advanced conditionals, grid, flex box, and positioning patterns.',
            },
            {
              url: 'https://www.ghostbed.com/',
              title: 'Cart Slider',
              linkText: 'GhostBed Homepage',
              body: 'I had the privilege of implementing the cart slider! I added some styling touches, such as the hover states and transitional animations on the buttons on those components.',
            },
          ].map(({ url, title, linkText, body }) => (
            <div
              key={uuidv4()}
              className='mt-4 flex flex-col gap-y-2 rounded-lg border-2 border-[#5FA405] px-5 py-4'
            >
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
              {body}
            </div>
          ))}
        </div>

        <h2 id='personal-works' className='mt-4 text-2xl font-bold sm:text-3xl'>
          Personal Works
        </h2>
        <div className='flex flex-col gap-y-2'>
          {[
            <LensStarterAppAnnouncement
              key={uuidv4()}
              addClassNames='from-blue-500 via-purple-500 to-pink-500'
            />,
            <DadJokesAnnouncement
              key={uuidv4()}
              addClassNames='from-purple-500 via-pink-500 to-blue-500'
            />,
            <SynthAnnouncement
              key={uuidv4()}
              addClassNames='from-pink-500 via-blue-500 to-purple-500'
            />,
            <GptAnnouncement
              key={uuidv4()}
              addClassNames='from-blue-500 via-purple-500 to-pink-500'
            />,
          ].map((announcement) => (
            <div key={uuidv4()} className='my-4'>
              {announcement}
            </div>
          ))}
        </div>
      </div>

      <Features />

      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold sm:text-3xl'>Other Personal Works</h2>
        <p>
          Check out more of my open-source projects on{' '}
          <a
            href='https://www.github.com/evan-walter/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
