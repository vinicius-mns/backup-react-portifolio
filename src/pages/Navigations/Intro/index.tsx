import React, { useState } from 'react'
import './style.scss'
import image from '../../../midia'
import Contacts from '../../../components/contacts'
import { useDispatch } from 'react-redux'
import { SideBar } from '../../../redux/slices/toggleComponents'


const Intro = () => {
	const dispatch = useDispatch()

	useState(() => dispatch(SideBar(''))) // inicia com a barra leteral "invisivel"

	const start = () => {
		dispatch(SideBar('showSideBar'))
		dispatch(slideIntroCard())
	}

	return(
		<div className='intro'>
			<div className='container_img' >
				<img className='avatarx' src={image.saudacao} alt='boneco modelo 3d' />
			</div>
			<div className='container_content'>
				<h1>Bem Vindo</h1>
				<p>Olá, eu me chamo Vinicius e este é o meu portifolio.</p>
				<p>Fique à vontade para usar a barra leteral e me conhecer melhor</p>
				<Contacts resolve='inIntro' />
			</div>
			<button onClick={ start } className='button'><h2>I N I C I A R</h2></button>
		</div>
	)
}

export default Intro