import React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '../../../redux/store'
import CardProject from './Card-Project'
import './style.scss'

export default function MeusProjetos() {
	const projects = useSelector((state: Store) => state.projetos)
	return (
		<div className='container-p'>
			{
				projects.map((project, index) =>
					<CardProject 
						key={index}
						title={project.title}
						image={project.image}
						description={project.description}
						repository={project.repository}
						site={project.site}
						stacks={project.stacks}
					/>
				)
			}
		</div>
	)
}