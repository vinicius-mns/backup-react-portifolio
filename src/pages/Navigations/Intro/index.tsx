import React, { useState } from 'react'
import './style.scss'
import image from '../../../midia'
import Contacts from '../../../components/contacts'
import Login from '../../Users/Login'

const Intro = () => {
	const [ login, setLogin ] = useState( false )

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
				<button onClick={() => setLogin( true )} >Logar</button>
				{login && <Login />}
			</div>
		</div>
	)
}

export default Intro