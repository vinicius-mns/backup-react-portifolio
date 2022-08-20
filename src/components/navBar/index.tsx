import React from 'react'
import './style.css'
import ItemOption from '../ItemOption'
import { useNavigate } from 'react-router-dom'
import myPath from '../../routes/myPaths'

export default function NavBackground(){
	const navigate = useNavigate()

	return(
		<div className='navBackground' >
			<nav className='container button-group'>
				<ItemOption text='Quem Sou eu' click={ () => navigate( myPath.quemSou ) }/>
				<ItemOption text='O que eu sei fazer' click={ () => navigate( myPath.oQueSei ) }/>
				<ItemOption text='O que eu quero' click={ () => navigate( myPath.oQQuero ) }/>
				<ItemOption text='O que eu não sei fazer' click={ () => navigate( myPath.oQueNaoSei ) }/>
				<ItemOption text='Meus projetos' click={ () => navigate( myPath.projetos ) }/>
				<ItemOption text='Porque do portifolio ser assim'/>
				<ItemOption text='Feebacks'/>
			</nav>
		</div>
	)
}