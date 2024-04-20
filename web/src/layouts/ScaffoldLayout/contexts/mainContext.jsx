import { createContext, useContext } from 'react'

const MainContext = createContext()

export const MainContextProvider = MainContext.Provider

export const useMainContext = () => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error('Use useMainContext in MainContextProvider')
  }
  return context
}
