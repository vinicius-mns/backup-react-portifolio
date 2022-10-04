import { configureStore } from '@reduxjs/toolkit'
import quemEuSou, { IamInterface } from './slices/quemEuSou'
import toggleComponents from './slices/toggleComponents'

const store = configureStore({
	reducer: {
		toggleComponents: toggleComponents.reducer,
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