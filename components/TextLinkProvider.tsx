import { createContext, useContext } from 'react'

const TextLinkContext = createContext<string>(
  'font-medium text-blue-500 underline hover:text-black dark:text-blue-400 dark:hover:text-white'
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
