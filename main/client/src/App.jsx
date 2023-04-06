import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import axios from 'axios';
import './App.css';
import './styles/output.css';

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			//const url = `http://localhost:8000/auth/login/success`;
			const data = await axios.get('http://localhost:8000/auth/login/success', {
				withCredentials: true,
			});
			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
	// const [user, setUser] = useState(null);

	// const getUser = async () => {
	// 	try {
	// 		//const url = `http://localhost:8000/auth/login/success`;
	// 		const response = await fetch('http://localhost:8000/auth/login/success', {
	// 			method: 'GET',
	// 			credentials: 'include',
	// 		});
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setUser(data.user._json);
	// 		} else {
	// 			console.log('Error: ' + response.status);
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter> // </div>
	);
}

export default App;
