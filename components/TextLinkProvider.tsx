import { createContext, useContext } from 'react'

const TextLinkContext = createContext<string>(
  'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
)

interface TextLinkContextProviderProps {
  children: React.ReactNode
}

export default function TextLinkContextProvider({
  children,
}: TextLinkContextProviderProps) {
  const textLinkColors = useContext(TextLinkContext)

  return (
    <TextLinkContext.Provider value={textLinkColors}>
      {children}
    </TextLinkContext.Provider>
  )
}
