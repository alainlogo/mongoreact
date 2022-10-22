import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Post from './pages/Post'

const App = () => {
	return (
		<div>
			<BrowserRouter>

					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/post" exact component={Post} />
			</BrowserRouter>
		</div>
	)
}

export default App
