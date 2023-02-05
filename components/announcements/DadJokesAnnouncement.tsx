import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Announcement from './Announcement'

export default function DadJokesAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <Announcement addClassNames='from-purple-500 via-pink-500 to-blue-500'>
      <p>
        I recently added a new, fun project&mdash;a random dad jokes generator!
      </p>
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
        <li>Advanced responsive styling with CSS and Tailwind</li>
      </ul>
    </Announcement>
  )
}
