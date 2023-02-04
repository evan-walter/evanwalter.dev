import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'

export default function DadJokesAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-0.5'>
      <div className='flex flex-col gap-y-2 rounded-lg bg-white px-5 py-4 text-xl dark:bg-zinc-900'>
        <p>
          I recently added a new, fun project&mdash;a random{' '}
          <Link href='/dadjokes' className={textLinkColors}>
            dad jokes
          </Link>{' '}
          generator! You can check it out{' '}
          <Link href='/dadjokes' className={textLinkColors}>
            here
          </Link>
          .
        </p>
        <div>
          <p>
            Some skills and concepts I demonstrate in this project include...
          </p>
          <ul className='list-outside list-disc px-6'>
            <li>Fetching from a REST API</li>
            <li>Error handling</li>
            <li>useState hook</li>
            <li>Advanced responsive styling with CSS and Tailwind</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
