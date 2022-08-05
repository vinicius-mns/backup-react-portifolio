import { useState, createContext } from "react"

export const CustomerContext = createContext();

export default function CostumerProvider({ children }) {
  const [ eu, setEu ] = useState(false)
  const [ quero, setQuero ] = useState(false)
  const [ projetos, setProjetos ] = useState(false)
  const [ naoSei, setNaoSei ] = useState(false)
  const [ sei, setSei ] = useState(false)
  const [intro, setIntro ] = useState( true )

  const context = {
    eu, setEu,
    quero, setQuero,
    projetos, setProjetos,
    naoSei, setNaoSei,
    sei, setSei,
    intro, setIntro,
  }

  return(
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  )
}