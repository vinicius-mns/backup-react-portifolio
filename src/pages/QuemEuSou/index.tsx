import './style.css'
import { img_description, i_am, image } from './content'

export default function QuemSouEu() {
  return(
    <div className='box displayFlex'>
      <div className='quadro'>
          <img className='avatar' src={image} alt={img_description} />
      </div>
        <h1>V i n í c i u s</h1>
      <div className='text'>
          <p>{i_am}</p>
    </div>
  </div>
  )
}