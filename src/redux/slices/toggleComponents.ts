import { createSlice } from '@reduxjs/toolkit'

const toggleComponents = createSlice({
	name: 'toggleComponents',
	initialState: {
		sideBar: '',
		introCard: '',
	},
	reducers: {
		showSideBar: (state) => {
			state.sideBar = 'showSideBar'
		},
		slideIntroCard: (state) => {
			state.introCard = 'slideIntroCard'
		}
	}
})

export const { showSideBar, slideIntroCard } = toggleComponents.actions

export default toggleComponents