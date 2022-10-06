import { createSlice } from '@reduxjs/toolkit'

const toggleComponents = createSlice({
	name: 'toggleComponents',
	initialState: {
		sideBar: 'showSideBar',
		introCard: '',
		formQuemEuSou: false,
		modalDeleteProject: false,
		login: false,
	},
	reducers: {
		SideBar: (state, action: { payload: '' | 'showSideBar' }) => {
			state.sideBar = action.payload
		},
		slideIntroCard: (state) => {
			state.introCard = 'slideIntroCard'
		},
		setFormQuemEuSou: (state) => {
			state.formQuemEuSou === true ?
				state.formQuemEuSou = false :
				state.formQuemEuSou = true
		},
		setModalDeleteProject: (state) => {
			state.modalDeleteProject === true ?
				state.modalDeleteProject = false :
				state.modalDeleteProject = true
		},
		togglerLogin: (state) => {
			state.login === true ?
				state.login = false :
				state.login = true
		},
	}
})

export const { 
	SideBar,
	slideIntroCard,
	setFormQuemEuSou,
	setModalDeleteProject,
	togglerLogin,
} = toggleComponents.actions

export default toggleComponents