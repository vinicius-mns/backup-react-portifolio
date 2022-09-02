/* eslint-disable max-len */
import React from 'react'
import './style.scss'
import { cardProject } from '../../../../types/ReacProps'

const CardProject: React.FC<cardProject> = ({image, title, text, site, repo, stacks}) => {
	return (
		<div className='project-card'>
			<div className='container-img'>
				<div><img src={image.image} alt={image.desc}/></div>
			</div>
			<div className='container-content'>
				<div className='description'>
					<h1>{title}</h1>
					{text.map( ( paragrafo, i ) => <p key={i}>{paragrafo}</p> )}
				</div>
				<div className='stacks-link'>
					<div className='link'>
						{site && <a href={site} target='blak'>Site</a>}
						{repo && <a href={repo} target='blak'>Repositório</a>}
					</div>
					<div className='stacks'>
						{stacks.map( ( s, i ) => <div key={i}><img src={s.image} alt={s.desc}/></div> )}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardProject