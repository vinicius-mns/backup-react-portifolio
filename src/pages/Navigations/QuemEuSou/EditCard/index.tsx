import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFormQuemEuSou } from '../../../../redux/slices/toggleComponents'
import { Store } from '../../../../redux/store'
import './style.scss'

const EditCard = () => {
	const dispatch = useDispatch()
	const iam = useSelector((state: Store) => state.quemEuSou)

	return (
		<form className='form'>
			<button className='close' onClick={() => dispatch(setFormQuemEuSou())}>X</button>
			<div className='image-container'>
				<h1>Imagem</h1>
				<div className='image-card'>
					<label>
						<h2>Link da imagem</h2>
						<input type="text" name='src' defaultValue={iam.image.src} />
					</label>

					<label>
						<h2>Descricao da imagem</h2>
						<input type="text" name='alt' defaultValue={iam.image.alt}/>
					</label>
				</div>
			</div>
			<div className='text-container'>
				<h1>Fale um pouco sobre voce</h1>
				<label>
					<textarea name='content' defaultValue={iam.content} />
				</label>
			</div>		
			<button className='submit'>Enviar</button>
		</form>
	)
}

export default EditCard