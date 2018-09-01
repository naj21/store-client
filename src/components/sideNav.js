import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../reducers/store';

//components
import FlashMessageList from './flash/FlashMessagesList';

//styles
import '../styles/sideNav.css'

const SideNav = () => {
	return(
			<div className='sideNav'>
				<h1 className='logo'><Link to='/'>Rayn</Link></h1>
				<ul className='links'>
					<li><Link to='/register'>REGISTER / LOGIN</Link></li>
					<li><Link to='/shop'>SHOP</Link></li>
					<li><Link to='/cart'>CART</Link></li>
					<Provider store={store}><FlashMessageList/></Provider>
				</ul>
			</div>
		)
}  

export default SideNav;