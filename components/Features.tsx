import { useTextLinkContext } from './TextLinkProvider'

export default function Features() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='mb-1 text-2xl font-bold sm:text-3xl'>Added Features</h2>
      <p>Here are a few features I&apos;ve implemented on this website.</p>
      <ul className='list-outside list-disc px-6'>
        <li>Dark mode</li>
        <li>
          Ability to subscribe to link styles{' '}
          <a
            href='https://beta.reactjs.org/reference/react/useContext'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            context
          </a>
        </li>
        <li>Responsive navigation menu (mobile and desktop)</li>
        <li>Highlighted active navigation menu item</li>
      </ul>
      <h2 className='mb-1 mt-8 text-2xl font-bold sm:text-3xl'>
        Desired Features
      </h2>
      <p>Here are some features I want to add to this website.</p>
      <ul className='list-outside list-disc px-6'>
        <li>Welcome video</li>
        <li>Showing projects on the Projects page (not just on GitHub)</li>
        <li>Contact form</li>
        <li>
          Guestbook{' '}
          <span className='ml-5 text-zinc-500 dark:text-zinc-400'>
            ✨ In progress! ✨
          </span>
        </li>
        <li>Blog with RSS feed (with Markdown)</li>
        <li>Analytics</li>
        <li>Site map</li>
        <li>Footer links (including site map)</li>
      </ul>
    </div>
  )
}
