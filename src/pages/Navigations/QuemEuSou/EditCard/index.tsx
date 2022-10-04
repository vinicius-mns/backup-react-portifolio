import React from 'react'
import { useDispatch } from 'react-redux'
import { setFormQuemEuSou } from '../../../../redux/slices/toggleComponents'
import './style.scss'

const EditCard = () => {
	const dispatch = useDispatch()

	return (
		<form className='form'>
			<button className='close' onClick={() => dispatch(setFormQuemEuSou())}>X</button>
			<div className='image-container'>
				<h1>Imagem</h1>
				<div className='image-card'>
					<label>
						<h2>Link da imagem</h2>
						<input type="text" />
					</label>

					<label>
						<h2>Descricao da imagem</h2>
						<input type="text" />
					</label>
				</div>
			</div>
			<div className='text-container'>
				<h1>Fale um pouco sobre voce</h1>
				<textarea />
			</div>
			<button className='submit'>Enviar</button>
		</form>
	)
}

export default EditCard