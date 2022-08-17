import './style.css'
import image from '../../midia/saudacao.gif'
import Contacts from '../../components/contacts'

export default function Intro() {
  return(
    <div className='intro'>
      <div className='quadrox displayFlex'>
        <img className='avatarx' src={image} alt='boneco modelo 3d' />
      </div>
      <div className='introx'>
        <h1>Bem   Vindo</h1>
        <p>Olá, eu me chamo Vinicius e este é meu portifolio.</p>
        <p>Fique a vontada para usar a barra leteral e me conhecer melhor</p>
      <Contacts resolve='inIntro' />
      </div>
    </div>
  )
}