import { createSlice } from '@reduxjs/toolkit'

const toggleComponents = createSlice({
	name: 'toggleComponents',
	initialState: {
		sideBar: 'showSideBar',
		introCard: '',
	},
	reducers: {
		SideBar: (state, action: { payload: '' | 'showSideBar' }) => {
			state.sideBar = action.payload
		},
		slideIntroCard: (state) => {
			state.introCard = 'slideIntroCard'
		}
	}
})

export const { SideBar, slideIntroCard } = toggleComponents.actions

export default toggleComponents