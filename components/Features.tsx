import { useTextLinkContext } from './TextLinkProvider'

export default function Features() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-2xl font-bold sm:text-3xl'>Features</h2>
      <p>Here are a few features I&apos;ve implemented on this web app.</p>
      <ul className='list-outside list-disc px-6'>
        <li>
          End-to-end test coverage with{' '}
          <a
            href='https://www.cypress.io/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            Cypress
          </a>{' '}
          <Announcement text='New!' />
        </li>
        <li>
          Dark mode with{' '}
          <a
            href='https://tailwindcss.com/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            TailwindCSS
          </a>
        </li>
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
        <li>Footer menu</li>
      </ul>
      <h2 className='mt-8 text-2xl font-bold sm:text-3xl'>Desired Features</h2>
      <p>Here are some features I want to add to this website.</p>
      <ul className='list-outside list-disc px-6'>
        <li>
          Guestbook <Announcement text='In progress!' />
        </li>
        <li>Blog with RSS feed (with Markdown)</li>
        <li>Contact form</li>
        <li>Welcome video</li>
        <li>Analytics</li>
        <li>Site map</li>
      </ul>
    </div>
  )
}

interface AnnouncementProps {
  text: string
}

export function Announcement({ text }: AnnouncementProps) {
  return (
    <span className='ml-3 whitespace-nowrap text-zinc-500 dark:text-zinc-400'>
      ✨ {text} ✨
    </span>
  )
}
