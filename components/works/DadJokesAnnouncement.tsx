import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

interface AnnouncementProps {
  addClassNames: string
}

export default function DadJokesAnnouncement({
  addClassNames,
}: AnnouncementProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames={addClassNames}>
      <p>I added a new, fun project&mdash;a random dad jokes generator!</p>
      <div>
        Link:{' '}
        <Link href='/dad-jokes' className={textLinkColors}>
          Dad Jokes Generator App
        </Link>
      </div>
      <p>Some skills and concepts I demonstrate in this project include...</p>
      <ul className='list-outside list-disc px-6'>
        <li>Fetching from a REST API</li>
        <li>Error handling</li>
        <li>React hooks</li>
        <li>Advanced responsive styling with Tailwind CSS</li>
      </ul>
    </Work>
  )
}
