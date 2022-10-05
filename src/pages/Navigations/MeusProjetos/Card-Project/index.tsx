import React from 'react'
import './style.scss'
import { ProjectInterface } from '../../../../redux/slices/projetos'

const CardProject: React.FC<ProjectInterface> = ({image, title, description, site, repository, stacks}) => {
	return (
		<div className='project-card'>
			<div className='container-img'>
				<div><img src={image.src} alt={image.alt}/></div>
			</div>
			<div className='container-content'>
				<div className='description'>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
				<div className='stacks-link'>
					<div className='link'>
						{site && <a href={site} target='blak'>Site</a>}
						{repository && <a href={repository} target='blak'>Repositório</a>}
					</div>
					<div className='stacks'>
						{stacks.map( ( s, i ) => <div key={i}><img src={s.src} alt={s.alt}/></div> )}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardProject