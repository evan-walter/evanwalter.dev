import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

interface AnnouncementProps {
  addClassNames: string
}

export default function LensStarterAppAnnouncement({
  addClassNames,
}: AnnouncementProps) {
  const textLinkColors = useTextLinkContext()
  return (
    <Work addClassNames={addClassNames}>
      <p>
        I started building a social media web app with Next.js, React, GraphQL,
        Tailwind, and the Lens Protocol.
      </p>
      <p>
        <span>
          Link:{' '}
          <a
            href='https://lens-starter-app.vercel.app/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Lens Social App
          </a>{' '}
        </span>
        <span className='ml-6'>
          <a
            href='https://github.com/evan-walter/lens-starter-app'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Source Code
          </a>
        </span>
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
    </Work>
  )
}
