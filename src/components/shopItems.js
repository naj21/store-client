import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Col, Row, Glyphicon} from 'react-bootstrap';
import 'bootstrap3/dist/css/bootstrap.css';
import {bindActionCreators} from 'redux';
import {selectLaptop} from '../actions/index';
import '../reducers/store';


//components
//import Cart from './cart'

//styles
import '../styles/shop.css'

var cartItems=[];

class ShopItems extends Component{ 
	constructor(props){
	 	super(props);
	// 	this.state= {
	// 		items: cartItems
	// 	}
	this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(){
		this.props.onAdd(this.props.item);
		        console.log(this.props.item)		
	}

	render(){
		// var {items} = items;
		// items = items.map((cartItem, index)=>{
		// 	return(
		// 		<Cart items={items} key={index}/>
		// 	)
		// })

	return(
	<Col sm={6} lg={4} className='items'>
		<img src={this.props.item.image}/>
		<Col xs={8} className='itemName'>
			<Row>₦{this.props.item.price}</Row>
			<Row>{this.props.item.name}</Row>
		</Col>
		<Col xs={2} xsOffset={2} className='cartLink'>
			<Button onClick={()=>{this.props.dispatch(this.props.item)}}><Glyphicon glyph='shopping-cart'/></Button>
		</Col>		
	</Col>
	)
}
}


export default (ShopItems);