import React from 'react'
import './style.scss'

const Login = () => {
	return (
		<main>
			<div>
				<input type="text" placeholder='Nome' />
				<input type="password" placeholder='Senha' />
			</div>
			<button>Logar</button>
		</main>
	)
}

export default Login