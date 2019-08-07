import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

//styles
import '../styles/home.css';


const Home = ()=>{
	return(
		<div className="hero">
			<div className="left">
			</div>
			<div className="right">
				<div className="details">
					<h1>EXCLUSIVE:</h1>
					<h2>THE LATEST LAPTOPS AND ACCESSORIES</h2>
					<p>The perfect laptops for work and liesure</p>
					<button><Link to='/shop' style={{textDecoration:'none'}}>SHOP NOW</Link></button>
				</div>
			</div>
		</div>
		)
}

export default Home;