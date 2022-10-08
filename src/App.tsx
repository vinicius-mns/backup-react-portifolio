import React from 'react'
import './styles/App.scss'
import { useDispatch } from 'react-redux'
import { toggleLogin } from './redux/slices/toggleComponents'
import Login from './pages/Users/Login'

import NavBackground from './components/navBar'

import MyRoutes from './routes/MyRoutes'
import { useSelector } from 'react-redux'
import { Store } from './redux/store'

function App() {
	const dispatch = useDispatch()
	const toggleState = useSelector((state: Store) => state.toggleComponents)

	return (
		<div>
			{ toggleState.login && <Login /> }
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
