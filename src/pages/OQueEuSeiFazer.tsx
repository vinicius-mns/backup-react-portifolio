import '../styles/OQueEuSeiFazer.css'
import image from '../midia/apontando.gif'

export default function OQueEuSei() {
  return (
    <div className="OQueEuSei">
      <div className="lado">
        <div className='xx'>
          <img src={image} alt="eu" />
        </div>
        <h1>Algo Aqui</h1>
        <div className='yy'>
        </div>
      </div>
      <div className="lado">
        <a className='certificado' 
          href='https://www.credential.net/57368f52-2ce0-4003-b4f4-bae0209a995e#gs.7xplpt'
          target='blank'
        >
          <h2>Fundamentos</h2>
          <img 
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38013201"
            alt="Certificado"
          />
        </a>
        <a className='certificado'
          href='https://www.credential.net/c2a6609d-1c9e-4ff7-88a4-669dfa23fe2d#gs.7xps3x'
          target='blank'
        >
          <h2>Front-End</h2>
          <img 
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/42886866"
            alt="Certificado"
            className='certificado'
          />
        </a>
        <a className='certificado'
          href='https://www.credential.net/0ee03b0c-bf3c-432a-b17c-fbbdcce92198#gs.7xps4h'
          target='blank'
        >
          <h2>Backend-End</h2>
          <img 
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/54650665"
            alt="Certificado"
            className='certificado'
          />
        </a>
      </div>
    </div>
  )
}