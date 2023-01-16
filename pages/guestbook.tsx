import prisma from 'lib/prisma'
import { useState } from 'react'

export async function getServerSideProps() {
  const guestbookPosts = await prisma.guestbookPost.findMany()
  return {
    props: {
      initialGuestbookPosts: guestbookPosts,
    },
  }
}

async function createGuestPost(guestbookPost) {
  const response = await fetch('/api/guestbook', {
    method: 'POST',
    body: JSON.stringify(guestbookPost),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export default function Guestbook({ initialGuestbookPosts }) {
  const [guestbookPosts, setGuestbookPosts] = useState(initialGuestbookPosts)

  const fieldClassNames =
    'rounded-md border border-zinc-300 bg-white px-2 py-1 placeholder:text-zinc-500 focus:outline-zinc-300 dark:border-none dark:bg-zinc-800 dark:placeholder:text-zinc-400 dark:focus:outline-zinc-400'

  return (
    <div className='flex h-full min-h-screen w-full flex-col gap-y-2'>
      <h1 className='mb-1 text-3xl font-bold sm:text-4xl'>Guestbook</h1>
      <p className='text-lg'>
        Sign my guestbook! Leave a comment below for future visitors. You can
        share anything you like&mdash;a greeting, appreciation, something about
        yourself, words of wisdom, something interesting, or something funny.
      </p>
      <form
        className='my-4 flex flex-col gap-y-4'
        onSubmit={async (data, e) => {
          try {
            await createGuestPost(data)
            setGuestbookPosts([...guestbookPosts, data])
            e.target.reset()
          } catch (err) {
            console.log(err)
          }
        }}
      >
        <input
          className={fieldClassNames}
          type='text'
          placeholder='Name'
          required
        />
        <textarea
          className={fieldClassNames}
          name='message'
          id='message'
          placeholder='Message'
          cols={55}
          rows={3}
          required
        />
        <button
          type='submit'
          className='w-fit rounded-md bg-zinc-200 px-4 py-1.5 font-semibold hover:bg-zinc-300 focus:outline-zinc-400 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
        >
          Sign
        </button>
      </form>

      <h2 className='text-2xl'>Guestbook Entries</h2>
      {guestbookPosts.map((guestbookPost, i: number) => (
        <div className='mt-6 flex flex-col gap-y-2' key={i}>
          <div>{guestbookPost.content}</div>
          <div className='text-zinc-500 dark:text-zinc-400'>
            {guestbookPost.name}
          </div>
        </div>
      ))}
    </div>
  )
}
