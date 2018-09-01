import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Row, Button} from 'react-bootstrap';


//actions
import {selectLaptop} from '../actions/index';
import { order } from '../actions/orderActions';

//components
import CartItems from './cartItems'

//reucers
import '../reducers/store'

//styles
import 'bootstrap3/dist/css/bootstrap.css';
import '../styles/cart.css'

var laptops = [],
		laptop=[];

class Cart extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: laptop
		}

		this.handleOrder = this.handleOrder.bind(this);
	}

	handleOrder(){
		this.props.order(this.state.cart)
	}

	componentDidMount(item){
	if (!this.props.cartLaptops) {
		return null
		}
		this.list(this.props.cartLaptops)
	}

	list(item){
		laptops.push(item);
		laptop = [];
		for(let i=0; i<laptops.length; i++){
			if(laptop.indexOf(laptops[i]) === -1){
				laptop.push(laptops[i])
			}
		}
		this.setState(
			{
			 cartItems : laptop
			}
		)
	}

	render(){
		const user= this.props.users.emailAddress
		var {cart}= this.state
		cart = laptop.map((item, index)=>{
			return(
				<CartItems item={item} key={index}/>
			)
		})

		var amount = laptop.reduce(
			(sum, current)=>{
				return sum + current.price;
			},0
			)
		return(
			<div className='top'>
				<h2>Shopping Cart</h2>
				<form action='http://localhost:1337/order'> 
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
							<Col xs={12} className='submit'><Button type='submit' onSubmit = {this.handleOrder}>Checkout</Button></Col>
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
	cartLaptops: state.cartLaptops,
	users: state.users
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		order: order, 
	},
		dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);