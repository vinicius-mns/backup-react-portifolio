import React from 'react'
import './style.css'
import { img_description, i_am } from './content'
import Contacts from '../../components/contacts'
import { oQueEuSei } from '../../types/ReacProps'

const QuemSouEu: React.FC<oQueEuSei> = ({avatar}) => {
	return(
		<div className='box'>
			<div className='quadro'>
				<img className='avatar' src={avatar} alt={img_description} />
			</div>
			<div className='text'>
				<h1>V i n í c i u s</h1>
				{ i_am.map( ( me, index ) => <p key={ index } >{ me }</p> ) }
			</div>
			<Contacts resolve='inApp' />
		</div>
	)
}

export default QuemSouEu