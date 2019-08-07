import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
		<Router>
			<div className="main">
				<SideNav/>
				
				<div className="content">
					{routes.map((route, index)=>(
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.main}
						/>
					))}
				</div>
			</div>
		</Router>
	)
}

export default Main;