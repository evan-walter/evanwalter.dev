import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

export default function PodcastAppearanceAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <Work addClassNames='from-purple-500 via-pink-500 to-blue-500'>
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
        podcast! You can listen to the episode{' '}
        <a
          href='https://podcast.thereactshow.com/1764837/12142504'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          here
        </a>
        .
      </p>
      <p>On the show, I share about...</p>
      <ul className='list-outside list-disc px-6'>
        <li>My background</li>
        <li>Why I got into web development</li>
        <li>React</li>
        <li>useEffect hook nuances</li>
        <li>Networking</li>
        <li>Banter</li>
      </ul>
    </Work>
  )
}
