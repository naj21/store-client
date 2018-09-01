import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Button, Row, Col, Grid} from 'react-bootstrap';
import 'bootstrap3/dist/css/bootstrap.css';

//components
import SideNav from './sideNav';
import Cart from './cart';
import Register from './register';
import Shop from './shop';

//images
import siteImage from '../images/samsung7.jpeg';
import lenovo from '../images/lenovo2.jpeg';
import samsung from '../images/samsung3.jpeg';

//styles
import '../styles/home.css';


const Home = ()=>{
	return(
		<Grid fluid className='home'>
			<Row>
				<Col xs={12} className='siteImage'>
					<img src={siteImage}/>
				</Col>
			</Row>
			<Router>
			<Row className='category'>
				<Col xs={12} className='header'>
					<h3>PRODUCTS</h3>
				</Col>
				<Col xs={12} sm={6} className='category1'>
					<h3>LENOVO</h3>
					<img src={samsung}/>
				</Col>
				<Col xs={12} sm={6} className='category2'>
					<h3>SAMSUNG</h3>
					<img src={lenovo}/>
				</Col>
			</Row>
			</Router>
		</Grid>
		)
}

export default Home;