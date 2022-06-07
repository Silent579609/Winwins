import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import React from 'react';

import './../styles/App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

const App = () => {
  	return (
    	<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/about" exact element={<About/>} />
				<Route path="/contacts" exact element={<Contacts/>} />
			</Routes>
		</BrowserRouter>	
  	);
}

export default App;

