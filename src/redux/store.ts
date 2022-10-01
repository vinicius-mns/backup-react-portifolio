import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/toggleComponents'

const store = configureStore({
	reducer: {
		toggleComponents: appSlice.reducer,
	}
})

export default store