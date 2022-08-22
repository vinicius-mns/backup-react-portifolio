import React from 'react'
import { contacts } from '../../types/ReacProps'
import { useState } from 'react'
import './style.scss'
 
const Contacts: React.FC<contacts> = ({ resolve }) => {
	const [ e, setE ] = useState( false )

	return (
		<div className={resolve}>
			<a href="https://www.linkedin.com/in/vinicius-dev-junior/" target='blank'>
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
			</a>
			<a href="https://github.com/vinicius-mns" target='blank'>
				<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
			</a>
			<img 
				src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
				alt="Email"
				onClick={() => setE( true )}
			/>
			{ e && 
				<div className='email' onMouseLeave={() => setE( false )}>
					<p onClick={() => setE( false )}>X</p>
					<h2>vinicius_dev@hotmail.com</h2>
				</div>
			}
		</div>
	)
}

export default Contacts