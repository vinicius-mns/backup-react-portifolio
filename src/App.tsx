import React from 'react'
import './App.css'
import './styles/Page.css'

import NavBackground from './components/navBar'

import MyRoutes from './routes/MyRoutes'

function App() {
	return (
		<div>
			<div>
				<NavBackground />
			</div>
			<div className='page'>
				<MyRoutes />
			</div>
		</div>
	)
}

export default App
