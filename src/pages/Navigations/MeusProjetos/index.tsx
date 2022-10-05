import React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '../../../redux/store'
import CardProject from './Card-Project'
import './style.scss'
import ModalDeleteProject from './Card-Project/DeleteModal'

export default function MeusProjetos() {
	const projects = useSelector((state: Store) => state.projetos)
	const toggle = useSelector((state: Store) => state.toggleComponents)

	return (
		<div className='container-p'>
			{
				projects.map((project, index) =>
					<CardProject
						_id={project._id}
						key={index}
						image={project.image}
						description={project.description}
						repository={project.repository}
						site={project.site}
						stacks={project.stacks}
					/>
				)
			}
			{  toggle.modalDeleteProject && <ModalDeleteProject /> }
		</div>
	)
}