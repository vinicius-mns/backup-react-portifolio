import React from 'react'
import './style.scss'
import { certificados, soft, hard } from './content'
import { oQueEuSei } from '../../types/ReacProps'
import Contacts from '../../components/contacts'

const OQueEuSei: React.FC<oQueEuSei> = ({avatar}) => {
	return (
		<div className="container_oqs">
			<div className='container_img'>
				<img src={avatar} alt="eu" />
			</div>
			<div className='text_container'>
				<h1>Soft Skills</h1>
				{ soft.map( ({titulo, content}, index ) => (
					<div key={index} className='skils'>
						<h2>{titulo}</h2>
						<div>
							{content.map( ( x, i ) => <p key={i} >{x}</p> )}
						</div>
					</div>
				) )}
			</div>
			<div className='container_img'>
				<img src={avatar} alt="eu" />
			</div>
			<div className='text_container'>
				<h1>Hard Skills</h1>
				{ hard.map( ({titulo, content}, index ) => (
					<div key={index} className='skils'>
						<h2>{titulo}</h2>
						<div>
							{content.map( ( x, i ) => <p key={i} >{x}</p> )}
						</div>
					</div>
				) )}
			</div>
			<div className='container_certificate' >
				{ certificados.map( ({ titulo, link, img }, index ) => (
					<a className='certificate'
						href={link}
						target='blank'
						key={ index }
					>
						<h2>{titulo}</h2>
						<img 
							src={img}
							alt={`Certificado de ${titulo}`}
						/>
					</a>
				) ) }
			</div>
			<Contacts resolve='inApp'/>
		</div>
	)
}

export default OQueEuSei