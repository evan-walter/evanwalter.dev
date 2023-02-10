import PodcastAppearanceAnnouncement from 'components/works/PodcastAppearanceAnnouncement'
import Contact from 'components/Contact'

export default function podcast() {
  return (
    <div className='flex flex-col text-lg gap-y-8'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Podcast</h1>
      <PodcastAppearanceAnnouncement />
      <Contact />
    </div>
  )
}
