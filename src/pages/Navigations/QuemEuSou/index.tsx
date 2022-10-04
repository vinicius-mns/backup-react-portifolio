import React from 'react'
import './style.scss'
import { oQueEuSei } from '../../../types/ReacProps'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { Store } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import Contacts from '../../../components/contacts'
import EditCard from './EditCard'
import { setFormQuemEuSou } from '../../../redux/slices/toggleComponents'

const QuemSouEu: React.FC<oQueEuSei> = () => {
	const iam = useSelector((state: Store) => state.quemEuSou)
	const switchModel = useSelector((state: Store) => state.toggleComponents.formQuemEuSou)
	const dispatch = useDispatch()

	return(
		<div className='container_qes'>
			<div className='container_img'>
				<img className='avatar' src={iam.image.src} alt={iam.image.alt} />
			</div>
			<div className='container_text'>
				<ReactMarkdown className='mark'>{ iam.content }</ReactMarkdown>
			</div>
			<Contacts resolve='inApp' />
			<button className='switch' onClick={() => dispatch(setFormQuemEuSou())}>Editar</button>
			{ switchModel && <EditCard /> }
		</div>
	)
}

export default QuemSouEu