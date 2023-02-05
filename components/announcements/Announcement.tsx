interface AnnouncementProps {
  addClassNames: string
  children: React.ReactNode
}

export default function Announcement({
  addClassNames,
  children,
}: AnnouncementProps) {
  return (
    <div
      className={`${addClassNames} w-full rounded-lg bg-gradient-to-br p-0.5`}
    >
      <div className='flex flex-col gap-y-2 rounded-lg bg-white px-5 py-4 text-lg dark:bg-zinc-900'>
        {children}
      </div>
    </div>
  )
}
