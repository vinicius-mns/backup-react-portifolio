import React from 'react'
import './style.scss'
import ItemOption from '../ItemOption'
import { useNavigate } from 'react-router-dom'
import myPath from '../../routes/myPaths'
import { useSelector } from 'react-redux'
import { Store } from '../../redux/store'

export default function NavBackground(){
	const navigate = useNavigate()
	const sideBar = useSelector((state: Store) => state.toggleComponents.sideBar)

	return(
		<div className={`container_nav ${sideBar}`} >
			<nav className='container_itens'>
				<ItemOption text='Quem Sou eu' click={ () => navigate( myPath.quemSou ) }/>
				<ItemOption text='O que eu sei fazer' click={ () => navigate( myPath.oQueSei ) }/>
				<ItemOption text='Meus projetos' click={ () => navigate( myPath.projetos ) }/>
				<ItemOption text='O que eu quero' click={ () => navigate( myPath.oQQuero ) }/>
				<ItemOption text='O que eu não sei fazer' click={ () => navigate( myPath.oQueNaoSei ) }/>
				<ItemOption text='Porque do portifolio ser assim' click={ () => navigate( myPath.portifolio ) }/>
				<ItemOption text='Feebacks' click={ () => navigate( myPath.feedBacks ) }/>
			</nav>
		</div>
	)
}