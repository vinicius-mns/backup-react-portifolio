import React from 'react'
import './style.scss'
import image from '../../midia/saudacao.gif'
import Contacts from '../../components/contacts'

const Intro = () => {
	return(
		<div className='intro'>
			<div className='container_img' >
				<img className='avatarx' src={image} alt='boneco modelo 3d' />
			</div>
			<div className='container_content'>
				<h1>Bem Vindo</h1>
				<p>Olá, eu me chamo Vinicius e este é o meu portifolio.</p>
				<p>Fique à vontade para usar a barra leteral e me conhecer melhor</p>
				<Contacts resolve='inIntro' />
			</div>
		</div>
	)
}

export default Intro