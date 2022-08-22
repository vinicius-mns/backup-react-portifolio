import React from 'react'
import './styles/App.scss'

import NavBackground from './components/navBar'

import MyRoutes from './routes/MyRoutes'

function App() {
	return (
		<div>
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
