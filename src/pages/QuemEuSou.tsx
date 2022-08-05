import image from '../midia/avatarg.gif'
import '../styles/QuemEuSou.css'

export default function QuemSouEu() {
  const desc = 'um modelo humanoide 3d respresentando o autor do portifolio'
  const sobre = `Me chamo Vinicius(ele / dele) - Programador júnior, atualmente estudando Python na Trybe.
  Curioso desde criança, quebrava todos os meus brinquedos para ver como funcionavam, hoje não quebro mais nada, porém ainda curioso. Programação era o meu destino e eu não sabia. Eu queria ser inventor, e inventar coisa nova é o que eu mais faço`
  return(
    <div className='box displayFlex'>
      <div className='circle blur'>
          <img className='avatar' src={image} alt={desc} />
      </div>
      <div className='text blur'>
          <p>{sobre}</p>
    </div>
  </div>
  )
}