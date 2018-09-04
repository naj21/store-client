import React from 'react';
import {Col, Row} from 'react-bootstrap';

//styles
import '../styles/shop.css';
import 'bootstrap3/dist/css/bootstrap.css';

const CartItems = ()=>{ 
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

export default CartItems;