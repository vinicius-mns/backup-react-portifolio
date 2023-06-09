import { createSlice } from '@reduxjs/toolkit'

export interface ProjectInterface {
	_id: string,
	image: { src: string, alt: string },
  description: string,
  repository: string,
  site: string,
  stacks: { src: string, alt: string }[],
}

const projetos = createSlice({
	name: 'projetos',
	initialState: [
		{
			_id: '',
			image: {src: '', alt: ''},
			description: '',
			repository: '',
			site: '',
			stacks: [ {src: '', alt: ''} ],
		}
	],
	reducers: {
		setProjetos: (_state, action: {payload: ProjectInterface[]}) => {
			return action.payload
		}
	}
})

export const { setProjetos } = projetos.actions

export default projetos
