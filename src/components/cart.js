import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Row, Button} from 'react-bootstrap';

//actions
import { order } from '../actions/orderActions';

//components
import CartItems from './cartItems'

//reucers
import '../reducers/store'

//styles
import 'bootstrap3/dist/css/bootstrap.css';
import '../styles/cart.css'

class Cart extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: 'hert'
		}

		this.handleOrder = this.handleOrder.bind(this);
	}

	handleOrder(){
		// let cart = this.state.cart;
		// cart.forEach(()=>{
		this.props.order(this.state);
		// })
		localStorage.removeItem('Laptops');
	}

	componentWillMount(item){
		this.setState(
			{
			 cart : JSON.parse(localStorage.getItem('Laptops'))
			}
		)
	}

	render(){
		console.log(this.state.cart)
		const user= this.props.users.emailAddress
		var {cart}= this.state;
		if(cart != null){
			var amount = cart.reduce(
				(sum, current)=>{
					return sum + current.price;
				},0
				)


			cart = cart.map((item, index)=>{
				return(
					<CartItems item={item} key={index}/>
				)
			})

		}

		return(
			<div className='top'>
				<h2>Shopping Cart</h2>
				<form action=''> 
				<Row>
					<Col sm={12} md={8} className='cartDetails'>
						<Row>
							<Col xs={6}>
							</Col>
							<Col xs={4}>
								<h4>Name</h4>
							</Col>
							<Col xs={2}>
								<h4>Price</h4>
							</Col>
						</Row>
						{cart}				
					</Col>
					<Col xs={10} sm={10} md={4} className='cartTotal'>
						<h4>Cart Total</h4>
						<Row>
							<Col xs={8} className='total'>Total</Col>
							<Col xs={4}>{amount}</Col>
							<Col xs={12} className='submit'><Button type='submit' onClick = {this.handleOrder}>Checkout</Button></Col>
						</Row>
					</Col>
				</Row>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
	users: state.users
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		order: order
	},
		dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);