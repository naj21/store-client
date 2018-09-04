import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import 'bootstrap3/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from '../reducers/store';

//components
import Home from './home';
import Login from './login';
import SideNav from './sideNav';
import Cart from './cart';
import Register from './register';
import Shop from './shop';

//utils
import requireAuth from '../utils/requireAuth'


//styles
import '../styles/main.css';

const routes = [
	 {
	 path: '/',
	exact: true,
	//sidebar: ()=><div>home!</div>,
	main: ()=> <Home/>
	},
	{
	path: '/cart',
	main: requireAuth(Cart)
	},
	{
	path: '/login',
	main: ()=> <Login/>
	},
	{
	path: '/register',
	main: ()=> <Register/>
	},
	{
	path: '/shop',
	main: ()=> <Shop/>
	}
]

const Main = ()=>{
	return(
		<Provider store={store}>
		<Router>
			<Grid fluid={true} className='main'>
				<Row>
					<Col sm={4} md={3} className='sideNav'>
						<SideNav/>
					</Col>
					<Col sm={8} md={9}>
							<div>
								{routes.map((route, index)=>(
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										component={route.main}
									/>
								))}
							</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className='footer'>
						<h3>Rayn</h3>
						<p>Copyright@2018 by NAJ</p>
					</Col>
				</Row>
				</Grid>	
			</Router>
		</Provider>
		)
}

export default Main;