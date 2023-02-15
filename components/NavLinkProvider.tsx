import { createContext, useContext } from 'react'

const NavLinkContext = createContext<string>(
  'p-1 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
)

export function useNavLinkContext() {
  return useContext(NavLinkContext)
}

interface NavLinkProviderProps {
  children: React.ReactNode
}

export default function NavLinkProvider({ children }: NavLinkProviderProps) {
  const navLinkColors = useNavLinkContext()

  return (
    <NavLinkContext.Provider value={navLinkColors}>
      {children}
    </NavLinkContext.Provider>
  )
}
