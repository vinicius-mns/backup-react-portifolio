import '../styles/NavBackground.css'
import ItemOption from './ItemOption'
import { useContext } from 'react'
import { CustomerContext } from '../globalState/CostumerProvider'
import navigateTo from '../utils/navFunctions'

export default function NavBackground(){
  
  const { setEu, setQuero, setProjetos, setNaoSei, setSei, setIntro } = useContext(CustomerContext)

  const eu = () => navigateTo(setEu, [ setQuero, setProjetos, setNaoSei, setSei, setIntro ])
  const quero = () => navigateTo(setQuero, [ setEu, setProjetos, setNaoSei, setSei, setIntro ])
  const projetos = () => navigateTo(setProjetos, [ setEu, setQuero, setNaoSei, setSei, setIntro ])
  const naoSei = () => navigateTo(setNaoSei, [ setEu, setQuero, setProjetos, setSei, setIntro ])
  const sei = () => navigateTo(setSei, [ setEu, setQuero, setProjetos, setNaoSei, setIntro ])

  return(
    <div className='navBackground blur' >
      <nav className='container'>
        <ItemOption text='Quem eu Sou eu' click={ eu }/>
        <ItemOption text='O que eu quero' click={ quero }/>
        <ItemOption text='O que eu sei fazer' click={ sei } />
        <ItemOption text='O que eu não sei fazer' click={ naoSei }/>
        <ItemOption text='Meus projetos' click={ projetos }/>
        <ItemOption text='Porque do portifolio ser assim'/>
        <ItemOption text='Feebacks'/>
      </nav>
    </div>
  )
}