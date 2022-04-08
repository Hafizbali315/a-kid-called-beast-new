import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mint from './Containers/Mint'
import MintSuccess from './Containers/MintSuccess'

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Mint />} />
					<Route path="/mint-success" element={<MintSuccess />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
