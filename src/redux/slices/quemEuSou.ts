import { createSlice } from '@reduxjs/toolkit'

const quemEuSou = createSlice({
	name: 'quemEuSou',
	initialState:
		{
			_id: '',
			image: {
				src: '',
				alt: ''
			},
			content: '# Carregando'
		},
	reducers: {
		setQuemEuSou: (state, action: { payload }) => {
			state._id = action.payload._id
			state.content = action.payload.content
			state.image.src = action.payload.image.src
			state.image.alt = action.payload.image.alt
		}
	}
})

export const { setQuemEuSou } = quemEuSou.actions

export default quemEuSou
