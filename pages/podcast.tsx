import PodcastAppearanceAnnouncement from 'components/works/PodcastAppearanceAnnouncement'
import WorksPageReference from 'components/WorksPageReference'
import Contact from 'components/Contact'

export default function podcast() {
  return (
    <div className='flex flex-col gap-y-8 text-lg'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Podcast</h1>
      <PodcastAppearanceAnnouncement />
      <WorksPageReference />
      <Contact />
    </div>
  )
}
