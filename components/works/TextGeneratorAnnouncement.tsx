import Link from 'next/link'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

export default function TextGeneratorAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames='from-blue-500 via-purple-500 to-pink-500'>
      <p>
        I recently created a{' '}
        <Link href='/text-generator' className={textLinkColors}>
          GPT-3
        </Link>{' '}
        text generator with from Open AI!
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