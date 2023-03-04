import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Contact() {
  const textLinkColors = useTextLinkContext()

  return (
    <p className='w-full px-10 pt-4 text-center leading-loose opacity-80'>
      To get in touch, please reach out on{' '}
      <a
        href='https://linkedin.com/in/-evanwalter/'
        className={textLinkColors}
        target='_blank'
        rel='noreferrer noopener'
      >
        LinkedIn
      </a>{' '}
      or{' '}
      <a
        href='https://twitter.com/_evanwalter_/'
        className={textLinkColors}
        target='_blank'
        rel='noreferrer noopener'
      >
        Twitter
      </a>
      !
    </p>
  )
}
