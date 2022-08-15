import './style.css'
import { certificados } from './content'
import { useState } from 'react'

export default function OQueEuSei({avatar}: any) {
  const [x, xx] = useState('container_certificate')
  const [c, cc] = useState('invisible')

  return (
    <div className="container_oqs">
      <div className="container_info_oqs">
        <div className='card_img'>
          <img src={avatar} alt="eu" />
        </div>
        <div className='sub_container_oqs'>
        </div>
      </div>
      <div className={x} onMouseOver={() => {xx('show'); cc('close_b_certificate')}} >
        { certificados.map( ( { titulo, link, img } ) => (
          <a className='certificate'
            href={link}
            target='blank'
            >
            <h2>{titulo}</h2>
            <img 
              src={img}
              alt={`Certificado de ${titulo}`}
            />
          </a>
        ) ) }
        <button 
          className={c}
            onClick={ () => {
              xx('container_certificate');
              cc('invisible')
              }
            }
        >
          X
        </button>
      </div>
    </div>
  )
}