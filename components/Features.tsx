import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Features() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-2xl font-bold sm:text-3xl'>Features</h2>
      <p>Here are some features I added to this web app.</p>
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
        <li>Footer menu</li>
      </ul>
      <h2 className='mt-8 text-2xl font-bold sm:text-3xl'>Desired Features</h2>
      <p>Here are some features I want to add to this web app.</p>
      <ul className='list-outside list-disc px-6'>
        <li>Public blog (with Markdown)</li>
        <li>Login</li>
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
    <span className='ml-3 whitespace-nowrap text-neutral-500 dark:text-neutral-400'>
      ✨ {text} ✨
    </span>
  )
}
