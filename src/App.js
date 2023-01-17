import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
function App() {
	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
