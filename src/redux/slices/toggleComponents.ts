import { createSlice } from '@reduxjs/toolkit'

const toggleComponents = createSlice({
	name: 'toggleComponents',
	initialState: {
		sideBar: '',
	},
	reducers: {
		showSideBar: (state) => {
			state.sideBar = 'showSideBar'
		}
	}
})

export const { showSideBar } = toggleComponents.actions

export default toggleComponents