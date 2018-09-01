import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import 'bootstrap3/dist/css/bootstrap.css';


//styles
import '../styles/shop.css';

class CartItems extends Component{ 
	render(){
		return(
			<Row className='items'>
				<Col xs={6}>
					<img src={this.props.item.image}/>
				</Col>
				<Col xs={4}>
					<h4>{this.props.item.name}</h4>
				</Col>
				<Col xs={2}>
					<h4>{this.props.item.price}</h4>
				</Col>
			</Row>	
		)
}
}
export default CartItems;