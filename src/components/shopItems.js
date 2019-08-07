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
	<div className='items'>
		<img src={this.props.item.image}/>
		<div className='itemName'>
			<div>₦{this.props.item.price}</div>
			<div>{this.props.item.name}</div>
		</div>
		<div className='cartLink'>
			<Button onClick={()=>{this.props.dispatch(this.props.item)}}><Glyphicon glyph='shopping-cart'/></Button>
		</div>		
	</div>
	)
}
}


export default (ShopItems);