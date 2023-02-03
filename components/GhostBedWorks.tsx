import { useTextLinkContext } from './TextLinkProvider'

export default function GhostBedWorks() {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='w-fit border-b-2 border-[#5FA405] pb-2 text-2xl font-bold sm:text-3xl'>
        GhostBed Highlights
      </h2>
      <p>
        Below are a few of my contributions at my current role as a Web
        Developer at GhostBed.
      </p>
      <GhostBedWork
        title='Blog Article with Advanced Graphics'
        description=''
        url='https://www.ghostbed.com/pages/mattress-firmness-guide-and-scale'
      />
    </div>
  )
}

interface GhostBedWorkProps {
  title: string
  description: string
  url: string
}

export function GhostBedWork({ title, url }: GhostBedWorkProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <div className=''>
      <h3 className='text-xl font-bold sm:text-2xl'>{title}</h3>
      <a
        href={url}
        className={textLinkColors}
        target='_blank'
        rel='noreferrer noopener'
      >
        GhostBed
      </a>
    </div>
  )
}
