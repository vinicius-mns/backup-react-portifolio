import { configureStore } from '@reduxjs/toolkit'
import quemEuSou, { IamInterface } from './slices/quemEuSou'
import appSlice from './slices/toggleComponents'

const store = configureStore({
	reducer: {
		toggleComponents: appSlice.reducer,
		quemEuSou: quemEuSou.reducer,
	}
})

export type Store = {
	toggleComponents: { 
		sideBar: 'showSideBar' | '',
		introCard: 'slideIntroCard' | '',
	},
	quemEuSou: IamInterface,
}

export default store