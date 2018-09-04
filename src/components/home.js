import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import 'bootstrap3/dist/css/bootstrap.css';

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
					<img src={siteImage} alt='site-image'/>
				</Col>
			</Row>
			<Router>
			<Row className='category'>
				<Col xs={12} className='header'>
					<h3>PRODUCTS</h3>
				</Col>
				<Col xs={12} sm={6} className='category1'>
					<h3>LENOVO</h3>
					<img src={samsung} alt='lenovo-laptops'/>
				</Col>
				<Col xs={12} sm={6} className='category2'>
					<h3>SAMSUNG</h3>
					<img src={lenovo} alt='samsung-laptops'/>
				</Col>
			</Row>
			</Router>
		</Grid>
		)
}

export default Home;