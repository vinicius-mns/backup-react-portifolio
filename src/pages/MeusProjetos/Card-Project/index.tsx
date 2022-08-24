import React from 'react'
import './style.scss'

const CardProject = () => {
	return (
		<div className='project-card'>
			<div>
				<h1>Titulo</h1>
				<div>container da img</div>
			</div>
			<div>
				<div> aqui vai a descricao </div>
				<div>
					<div><span>Site</span> <span>Repositorio</span></div>
					<div> aqui vai as stacks </div>
				</div>
			</div>
		</div>
	)
}

export default CardProject