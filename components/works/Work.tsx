interface WorkProps {
  addClassNames: string
  children: React.ReactNode
}

export default function Work({
  addClassNames,
  children,
}: WorkProps) {
  return (
    <div
      className={`${addClassNames} w-full rounded-lg bg-gradient-to-br p-0.5`}
    >
      <div className='flex flex-col px-5 py-4 text-lg bg-white rounded-lg gap-y-2 dark:bg-zinc-900'>
        {children}
      </div>
    </div>
  )
}
