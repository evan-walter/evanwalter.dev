import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

export default function DadJokesAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames='from-pink-500 via-blue-500 to-purple-500'>
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
      <ul className='px-6 list-disc list-outside'>
        <li>Fetching from a REST API</li>
        <li>Error handling</li>
        <li>React hooks</li>
        <li>Advanced responsive styling with CSS and Tailwind</li>
      </ul>
    </Work>
  )
}
