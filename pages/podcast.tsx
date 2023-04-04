import PodcastAppearanceAnnouncement from 'components/works/PodcastAppearanceAnnouncement'
import PageReference from 'components/PageReference'

export default function podcast() {
  return (
    <div className='flex flex-col gap-y-3 text-lg'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Podcast</h1>
      <PodcastAppearanceAnnouncement addClassNames={'from-blue-500 via-purple-500 to-pink-500'} />
    </div>
  )
}
