import React from 'react';
import { connect } from 'react-redux';
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//actions
import { getArticulosAction } from '../actions/articulo';

//Components
import Navbar from './Navbar';

//pages
import InicioPage from './pages/InicioPage';
import ContactoPage from './pages/ContactoPage';
import ArticulosPage from './pages/ArticulosPage';
import ArticulosCreatePage from './pages/ArticulosCreatePage';
import ArticuloShowPage from './pages/ArticuloShowPage';
import ArticulosEditPage from './pages/ArticulosEditPage';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(getArticulosAction());
	}
	render() {
		return (
			<Router>
				<Navbar />
				<div className="container-fluid">
					<Switch>
						<Route exact path="/inicio" component={InicioPage} />
						<Route exact path="/articulos" component={ArticulosPage} />
						<Route exact path="/articulos/create" component={ArticulosCreatePage} />
						<Route exact path="/articulos/edit/:id" component={ArticulosEditPage} />
						<Route exact path="/articulos/:id" component={ArticuloShowPage} />
						<Route exact path="/contacto" component={ContactoPage} />
						<Route  path="/" component={InicioPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}
App = connect()(App);
export default App;
