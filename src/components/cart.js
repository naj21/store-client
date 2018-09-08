import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Grid, Row, Col, Button } from "react-bootstrap";

//actions
import { order } from "../actions/orderActions";

//components
import CartItems from "./cartItems";

//reucers
import "../reducers/store";

//styles
import "../styles/cart.css"

class Cart extends Component {
  constructor(props) {
    super(props);
    
    this.handleOrder = this.handleOrder.bind(this)
  }

  handleOrder(orders){
  	//orders.forEach((item)=>{
    this.props.order(orders);
    console.log(orders)
	//})

    localStorage.removeItem('Laptops')
  };
  render() {
    const user = this.props.users.emailAddress;
    const order = [];
    let list = "";
    const cart = JSON.parse(localStorage.getItem("Laptops"));
    let amount = 0;
    if (cart !== null) {
      const laptops  = cart;
      for (const laptop in laptops) {
        if (laptops.hasOwnProperty(laptop)) {
         const element = laptops[laptop];
          amount += element.price;
          order.push(element);
        }
      }
      list = order.map((item, index) => {
        return <CartItems item={item} key={index} />;
      });
    }

   return(
		<div className='top'>
			<h2>Shopping Cart</h2> 
			<Row>
				<Col sm={12} md={8} className='cartDetails'>
					<Row>
						<Col xs={4}>
						</Col>
						<Col xs={4}>
							<h4>Name</h4>
						</Col>
						<Col xs={2}>
							<h4>Price</h4>
						</Col>
					</Row>
					{list}				
				</Col>
				<Col xs={10} sm={10} md={4} className='cartTotal'>
					<h4>Cart Total</h4>
					<Row>
						<Col xs={8} className='total'>Total</Col>
						<Col xs={4}>{amount}</Col>
						<Col xs={12} className='submit'><Button type='submit' onClick = {this.handleOrder(order)}>Checkout</Button></Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      order: order
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
