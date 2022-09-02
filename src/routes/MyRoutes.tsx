/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom'
import myPath from './myPaths'

import Intro from '../pages/Navigations/Intro'
import QuemSouEu from '../pages/Navigations/QuemEuSou'
import OQueEuSei from '../pages/Navigations/OQueEuSei'
import OQueEuNaoSei from '../pages/Navigations/OQueEuNaoSei'
import OQueEuQuero from '../pages/Navigations/OQueEuQuero'
import MeusProjetos from '../pages/Navigations/MeusProjetos'
import Portifolio from '../pages/Navigations/Portifolio'
import FeedBacks from '../pages/Navigations/FeedBacks'

import imgs from '../midia'

export default function MyRoutes() {
	return(
		<Routes>
			<Route path='/' element={ <Intro /> } />
			<Route path={ myPath.quemSou } element={ <QuemSouEu avatar={imgs.eu}/> }/>
			<Route path={ myPath.oQueSei } element={ <OQueEuSei avatar={imgs.soft}/> }/>
			<Route path={ myPath.oQQuero } element={ <OQueEuQuero/> }/>
			<Route path={ myPath.oQueNaoSei } element={ <OQueEuNaoSei/> }/>
			<Route path={ myPath.projetos } element={ <MeusProjetos/> }/>
			<Route path={ myPath.portifolio } element={ <Portifolio/> }/>
			<Route path={ myPath.feedBacks } element={ <FeedBacks/> }/>
		</Routes> 
	)
}