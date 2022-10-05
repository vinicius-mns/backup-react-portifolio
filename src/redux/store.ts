import { configureStore } from '@reduxjs/toolkit'
import projetos, { ProjectInterface } from './slices/projetos'
import quemEuSou, { IamInterface } from './slices/quemEuSou'
import toggleComponents from './slices/toggleComponents'

const store = configureStore({
	reducer: {
		toggleComponents: toggleComponents.reducer,
		quemEuSou: quemEuSou.reducer,
		projetos: projetos.reducer,
	}
})

export type Store = {
	toggleComponents: { 
		sideBar: 'showSideBar' | '',
		introCard: 'slideIntroCard' | '',
		formQuemEuSou: boolean,
		modalDeleteProject: boolean,
	},
	quemEuSou: IamInterface,
	projetos: ProjectInterface[],
}

export default store