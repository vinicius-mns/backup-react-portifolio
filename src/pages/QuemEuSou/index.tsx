import './style.css'
import { img_description, i_am, image } from './content'

export default function QuemSouEu() {
  return(
    <div className='box'>
      <div className='quadro'>
          <img className='avatar' src={image} alt={img_description} />
      </div>
        <h1>V i n í c i u s</h1>
      <div className='text'>
          { i_am.map((me) => <p>{ me }</p>) }
    </div>
  </div>
  )
}