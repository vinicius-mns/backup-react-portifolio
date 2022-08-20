import React from 'react'
import { itemOption } from '../types/ReacProps'

const ItemOption: React.FC<itemOption> = ({ text, click }) => {
	return (
		<button className='itemOption'>
			<input type="radio" id={text} name="radio" onClick={click} />
			<label className="itemCoisa" htmlFor={text}><h3>{text}</h3></label>
		</button>
	)
}

export default ItemOption