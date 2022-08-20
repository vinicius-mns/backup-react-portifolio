import React from 'react'
import './style.css'
import { certificados, soft } from './content'
import { useState } from 'react'
import { oQueEuSei } from '../../types/ReacProps'

const OQueEuSei: React.FC<oQueEuSei> = ({avatar}) => {
	const [ x, xx ] = useState( 'container_certificate' )
	const [ c, cc ] = useState( 'invisible' )

	return (
		<div className="container_oqs">
			<div className="container_info_oqs">
				<div className='card_img'>
					<img src={avatar} alt="eu" />
				</div>
				<div className='sub_container_oqs'>
					<h1>Soft Skills</h1>
					{ soft.map( ({titulo, content}, index ) => (
						<div key={index }>
							<h2>{titulo}</h2>
							<div className='skils'>
								{content.map( ( x, i ) => <p key={i} >{x}</p> )}
							</div>
						</div>
					) )}
				</div>
			</div>
			<div className={x} onMouseOver={() => { xx( 'show' ); cc( 'close_b_certificate' ) }} >
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
				<button 
					className={c}
					onClick={ () => {
						xx( 'container_certificate' )
						cc( 'invisible' )
					}
					}
				>
          X
				</button>
			</div>
		</div>
	)
}

export default OQueEuSei