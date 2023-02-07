import { useTextLinkContext } from 'components/TextLinkProvider'

export default function Contact() {
  const textLinkColors = useTextLinkContext()

  return (
    <p className='text-lg'>
      For now, if you have any questions or want to get in touch, please reach
      out to me on{' '}
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
