import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Announcement from './Announcement'

export default function SynthAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <Announcement addClassNames='from-blue-500 via-purple-500 to-pink-500'>
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
        <li>Integrate an external components library</li>
      </ul>
    </Announcement>
  )
}
