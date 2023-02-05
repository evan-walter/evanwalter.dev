import { useTextLinkContext } from 'components/TextLinkProvider'
import Announcement from './Announcement'

export default function LensStarterAppAnnouncement() {
  const textLinkColors = useTextLinkContext()
  return (
    <Announcement addClassNames='from-blue-500 via-purple-500 to-pink-500'>
      <p>
        I recently started building a social media web app with with Next.js,
        React, GraphQL, TailwindCSS, and the Lens Protocol.
      </p>
      <p>
        Link:{' '}
        <a
          href='https://lens-starter-app.vercel.app/'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          Lens Starter App
        </a>{' '}
      </p>
      <p>
        I plan to add to this app in the near future. Here are a couple
        interesting features I want to implement.
      </p>
      <ul className='mb-2 list-outside list-disc px-6'>
        <li>Authentication</li>
        <li>
          Ability for users to sort their own posts and display other
          users&apos; posts based on number of likes, number of comments, and
          other parameters
        </li>
        <li>Full test coverage</li>
      </ul>
    </Announcement>
  )
}
