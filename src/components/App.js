import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from './Navbar';

//pages
import InicioPage from './pages/InicioPage';
import ContactoPage from './pages/ContactoPage';
import ArticulosPage from './pages/ArticulosPage';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar/>
				<div className="container-fluid">
					<Switch>
						<Route exact path="/inicio" component={InicioPage}/>
						<Route exact path="/articulos" component={ArticulosPage}/>
						<Route exact path="/contacto" component={ContactoPage}/>
						<Route exact path="/" component={InicioPage}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
