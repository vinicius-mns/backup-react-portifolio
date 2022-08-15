import './style.css'
import { img_description, i_am } from './content'

export default function QuemSouEu({avatar}: any) {
  return(
    <div className='box'>
      <div className='quadro'>
          <img className='avatar' src={avatar} alt={img_description} />
      </div>
      <div className='text'>
        <h1>V i n í c i u s</h1>
        { i_am.map((me) => <p>{ me }</p>) }
    </div>
  </div>
  )
}