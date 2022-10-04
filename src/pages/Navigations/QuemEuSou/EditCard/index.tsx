import { AxiosError } from 'axios'
import React, { FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MyAxios from '../../../../classes/MyAxios'
import { setFormQuemEuSou } from '../../../../redux/slices/toggleComponents'
import { Store } from '../../../../redux/store'
import './style.scss'

const EditCard = () => {
	const dispatch = useDispatch()
	const iam = useSelector((state: Store) => state.quemEuSou)

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = {
				image: {
					src: e.currentTarget.src.value,
					alt: e.currentTarget.alt.value,
				},
				content: e.currentTarget.content.value
			}
			const iamAxios = new MyAxios('https://v-portifolio-backend.herokuapp.com/iam')
			await iamAxios.update(iam._id, data)
			dispatch(setFormQuemEuSou())
		} catch (err) {
			if (err instanceof AxiosError) {
				const message = err.response?.data.issues[0].message
				alert(message)
			}
		}
	}

	return (
		<form className='form' onSubmit={ submit }>
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
			<button className='submit' type='submit'>Enviar</button>
		</form>
	)
}

export default EditCard