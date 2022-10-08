import React from 'react'
import './style.scss'

const Login = () => {
	return (
		<main>
			<h2>Bem vindo de volta</h2>
			<div>
				<input type="text" placeholder='Nome' />
				<input type="password" placeholder='Senha' />
			</div>
			<button className='teste'>Logar</button>
			<button>Adm login</button>
		</main>
	)
}

export default Login