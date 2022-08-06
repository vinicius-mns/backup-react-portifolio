import image from '../midia/saudacao.gif'
import '../styles/intro.css'

export default function Intro() {
  return(
    <div className='intro'>
      <div className='quadrox displayFlex'>
        <img className='avatarx' src={image} alt='boneco modelo 3d' />
      </div>
      <div className='introx'>
        <h1>B e m   V i n d o</h1>
        <p>Ola, Eu me chamo vinicius e este é meu portifolio.</p>
        <p>Fique a vontada para usar a barra leteral para me conhcer melhor</p>
      </div>
    </div>
  )
}