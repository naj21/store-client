import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

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
		<div className='cart'>
			<h2>Shopping Cart</h2> 
			<div className='cartInfo'>
				<div className='cartDetails'>
					<div className='cartHeader'>
            <div></div>
						<div>
							<h4>Name</h4>
						</div>
						<div>
							<h4>Price</h4>
						</div>
					</div>
					{list}				
				</div>
				<div className='cartTotal'>
					<h4>Cart Total</h4>
					<div className='total'>
						<div>Total</div>
						<div>{amount}</div>
          </div>
					<div className='submit'><Button type='submit' onClick = {this.handleOrder(order)}>Checkout</Button></div>
				</div>
			</div>
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
