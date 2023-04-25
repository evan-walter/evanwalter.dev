import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

interface AnnouncementProps {
  addClassNames: string
}

export default function PodcastAppearanceAnnouncement({
  addClassNames,
}: AnnouncementProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames={addClassNames}>
      <p>
        I am excited to announce that I had the privilege of appearing as a
        guest on{' '}
        <a
          href='https://podcast.thereactshow.com/1764837/12142504'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          The React Show
        </a>{' '}
        podcast!
      </p>
      <p>On the show, I...</p>
      <ul className='list-outside list-disc px-6'>
        <li>Share my journey into software engineering</li>
        <li>Encourage new engineers</li>
        <li>Discuss topics related to React</li>
      </ul>
    </Work>
  )
}
