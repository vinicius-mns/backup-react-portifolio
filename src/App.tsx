import React from 'react'
import './styles/App.scss'
import { useDispatch } from 'react-redux'
import { toggleLogin } from './redux/slices/toggleComponents'


import NavBackground from './components/navBar'

import MyRoutes from './routes/MyRoutes'

function App() {
	const dispatch = useDispatch()
	return (
		<div>
			<button className='login' onClick={() => dispatch(toggleLogin())}>?</button>
			<div>
				<NavBackground />
			</div>
			<div>
				<MyRoutes />
			</div>
		</div>
	)
}

export default App
