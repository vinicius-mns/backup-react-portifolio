import '../styles/NavBackground.css'
import ItemOption from './ItemOption'

export default function NavBackground(){
  return(
    <div className='navBackground blur' >
      <nav className='container'>
        <ItemOption text='Quem eu Sou eu'/>
        <ItemOption text='O que eu quero'/>
        <ItemOption text='O que eu sei fazer'/>
        <ItemOption text='O que eu não sei fazer'/>
        <ItemOption text='Meus projetos'/>
        <ItemOption text='Porque do portifolio ser assim'/>
        <ItemOption text='Feebacks'/>
      </nav>
    </div>
  )
}