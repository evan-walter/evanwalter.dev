import { useTextLinkContext } from 'components/TextLinkProvider'

export default function PodcastAppearanceAnnouncement() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5'>
      <div className='flex flex-col gap-y-2 rounded-lg bg-white px-5 py-4 text-xl dark:bg-zinc-900'>
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
          <li>Learning React</li>
          <li>useEffect hook nuances</li>
          <li>Networking</li>
          <li>Some playful banter</li>
        </ul>
      </div>
    </div>
  )
}
