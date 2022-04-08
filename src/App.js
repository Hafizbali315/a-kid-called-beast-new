import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mint from './Containers/Mint'

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Mint />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
