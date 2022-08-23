/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom'
import myPath from './myPaths'

import Intro from '../pages/Intro'
import QuemSouEu from '../pages/QuemEuSou'
import OQueEuSei from '../pages/OQueEuSei'
import OQueEuNaoSei from '../pages/OQueEuNaoSei'
import OQueEuQuero from '../pages/OQueEuQuero'
import MeusProjetos from '../pages/MeusProjetos'
import Portifolio from '../pages/Portifolio'
import FeedBacks from '../pages/FeedBacks'

import imgs from '../midia/midiaHub'

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