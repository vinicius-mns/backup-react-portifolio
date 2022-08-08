import '../styles/OQueEuSeiFazer.css'
import { certificados } from '../conteudos/OQueEuSei'
import image from '../midia/avatarg.gif'
import { useState } from 'react'

export default function OQueEuSei() {
  const [x, xx] = useState('container_certificate')
  const [c, cc] = useState('invisible')

  return (
    <div className="container_oqs">
      <div className="container_info_oqs">
        <div className='card_img'>
          <img src={image} alt="eu" />
        </div>
        <div className='sub_container_oqs'>
          <h1>Competencias</h1>
          <p>Eu sou incompetente em tudossssssssssssssssssssssssssssssssssssss</p>
          <br />
          <h1>Mais alguma coisa</h1>
          <p>Outro texo taqui dfffffffffffffffffffffffffffffffffffffff</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
          <br />
          <h1>Outro</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo explicabo ab corporis maxime? Ut a provident blanditiis perferendis temporibus dicta! Eos suscipit aliquid voluptatum illo recusandae totam expedita dolorem?</p>
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