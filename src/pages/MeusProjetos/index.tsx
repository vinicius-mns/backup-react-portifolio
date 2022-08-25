import React from 'react'
import CardProject from './Card-Project'
import { AppCalorias as C } from './projects/appCalorias'
import './style.scss'

export default function MeusProjetos() {
	return (
		<div className='container-p'>
			<CardProject title={C.title} image={C.image} text={C.text} repo={C.repo} site={C.site} stacks={C.stacks} />
		</div>
	)
}