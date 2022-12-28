export default function Features() {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-4xl font-bold max-sm:text-center'>
        Desired Features
      </h2>
      <p>Here are some features I&apos;d like to add to this website.</p>
      <ul className='list-outside list-disc px-6'>
        <li>Welcome video</li>
        <li>Projects to show here (not just on GitHub)</li>
        <li>Contact Form</li>
        <li>Guestbook</li>
        <li>Blog with RSS feed (using Markdown)</li>
        <li>Analytics</li>
        <li>Site Map</li>
        <li>Footer links (including site map)</li>
      </ul>
    </div>
  )
}
