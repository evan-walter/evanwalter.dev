import { createContext, useContext } from 'react'

const TextLinkContext = createContext<string>(
  'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
)

export function useTextLinkContext() {
  return useContext(TextLinkContext)
}

interface TextLinkProviderProps {
  children: React.ReactNode
}

export default function TextLinkProvider({ children }: TextLinkProviderProps) {
  const textLinkColors = useTextLinkContext()

  return (
    <TextLinkContext.Provider value={textLinkColors}>
      {children}
    </TextLinkContext.Provider>
  )
}
