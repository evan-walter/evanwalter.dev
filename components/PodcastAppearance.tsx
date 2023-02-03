import { useTextLinkContext } from 'components/TextLinkProvider'

export default function PodcastAppearance() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5'>
      <p className='rounded-lg bg-white px-5 py-4 text-xl dark:bg-zinc-900 max-md:text-center'>
        I am excited to announce that I had the privilege of appearing as a
        guest on{' '}
        <a
          href='https://podcast.thereactshow.com/1764837/12142504'
          className={textLinkColors}
          target='_blank'
          rel='noreferrer noopener'
        >
          The React Show podcast
        </a>
        ! You can listen to the episode{' '}
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
    </div>
  )
}
