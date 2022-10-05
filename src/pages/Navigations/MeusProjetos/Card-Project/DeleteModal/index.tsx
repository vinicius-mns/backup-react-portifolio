import React from 'react'
import './style.scss'
import ReactMarkdown from 'react-markdown'
import { useDispatch } from 'react-redux'
import { setModalDeleteProject } from '../../../../../redux/slices/toggleComponents'

const ModalDeleteProject = () => {
	const dispatch = useDispatch()
	return (
		<div className='modalDeleteProject'>
			<button className='close' onClick={() => dispatch(setModalDeleteProject())}>X</button>
			<div><h1>Realmente deseja deletar o Projeto ?</h1></div>
			<div>
				<ReactMarkdown>conteudo</ReactMarkdown>
			</div>
			<button><h2>Confirmar</h2></button>
		</div>
	)
}

export default ModalDeleteProject