import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

interface AnnouncementProps {
  addClassNames: string
}

export default function SynthAnnouncement({
  addClassNames,
}: AnnouncementProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames={addClassNames}>
      <p>I also added a synth app!</p>
      <div>
        Link:{' '}
        <Link href='/synth' className={textLinkColors}>
          Synth App
        </Link>
      </div>
      <p>
        As a musician (mainly drums) and someone who loves music, creating this
        app was quite fun for me. I plan to build onto it in the future!
      </p>
      <p>Some skills and concepts I demonstrate in this project include...</p>
      <ul className='list-outside list-disc px-6'>
        <li>Relatively complex, user-interactive state management</li>
        <li>Third-party components library integration</li>
      </ul>
    </Work>
  )
}
