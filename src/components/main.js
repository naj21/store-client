import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Button, Row, Col, Grid} from 'react-bootstrap';
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
import FlashMessages from './flash/FlashMessagesList'

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

// function requireAuth(nextState, replace){
// 	if(!sessionStorage.jwt){
// 		replace({
// 			pathname: '/login',
// 			state: {
// 				nextPathname: nextState.location.pathname
// 			}
// 		})
// 	}
// }

const Main = ()=>{
	return(
		<Router>
			<Grid fluid={true} className='main'>
				<Row>
					<Col sm={4} md={3} className='sideNav'>
						<SideNav/>
					</Col>
					<Col sm={8} md={9}>
						<Provider store={store}>
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
						</Provider>
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
		
		)
}

export default Main;