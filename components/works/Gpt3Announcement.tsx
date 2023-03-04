import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

interface AnnouncementProps {
  addClassNames: string
}

export default function Gpt3Announcement({ addClassNames }: AnnouncementProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames={addClassNames}>
      <p>
        Check out my{' '}
        <Link href='/gpt-3' className={textLinkColors}>
          GPT-3
        </Link>{' '}
        text generator app!
      </p>
      <p>In this project, I incorporate the following skills.</p>
      <ul className='list-outside list-disc px-6'>
        <li>Fetching from an external API</li>
        <li>Managing user input with a form</li>
        <li>React hooks and controlled components</li>
      </ul>
    </Work>
  )
}
