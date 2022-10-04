import { createSlice } from '@reduxjs/toolkit'

export interface IamInterface {
	_id: string,
	image: {
		src: string,
		alt: string
	},
	content: string
}

const quemEuSou = createSlice({
	name: 'quemEuSou',
	initialState:
		{
			_id: '',
			image: {
				src: '',
				alt: ''
			},
			content: '# Carregando...'
		} as IamInterface,
	reducers: {
		setQuemEuSou: (state, action: { payload: IamInterface }) => {
			state._id = action.payload._id
			state.content = action.payload.content
			state.image.src = action.payload.image.src
			state.image.alt = action.payload.image.alt
		}
	}
})

export const { setQuemEuSou } = quemEuSou.actions

export default quemEuSou
