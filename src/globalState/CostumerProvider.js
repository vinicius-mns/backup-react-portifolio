import { useState, createContext } from "react"

export const CustomerContext = createContext();

export default function CostumerProvider({ children }) {
  const [ eu, setEu ] = useState(false)

  const context = {
    eu, setEu,
  }

  return(
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  )
}