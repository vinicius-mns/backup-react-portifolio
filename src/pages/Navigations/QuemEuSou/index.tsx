import React from 'react'
import './style.scss'
import { img_description, i_am } from './content'
import Contacts from '../../../components/contacts'
import { oQueEuSei } from '../../../types/ReacProps'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { Store } from '../../../redux/store'
import Contacts from '../../../components/contacts'

const QuemSouEu: React.FC<oQueEuSei> = () => {
	const iam = useSelector((state: Store) => state.quemEuSou)

	return(
		<div className='container_qes'>
			<div className='container_img'>
				<img className='avatar' src={iam.image.src} alt={iam.image.alt} />
			</div>
			<div className='container_text'>
				<ReactMarkdown className='mark'>{ iam.content }</ReactMarkdown>
			</div>
			<Contacts resolve='inApp' />
		</div>
	)
}

export default QuemSouEu