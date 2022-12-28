import { createContext, useContext } from 'react'

const TextLinkContext = createContext<string>(
  'text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500'
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
