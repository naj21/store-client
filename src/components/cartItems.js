import React, {Component} from 'react';

//styles
import '../styles/shop.css';
import 'bootstrap3/dist/css/bootstrap.css';

class CartItems extends Component{
	render(){ 
		return(
			<div className='cartItem cartHeader'>
				<div>
					<img src={this.props.item.image} alt="laptop"/>
				</div>
				<div>
					<h4>{this.props.item.name}</h4>
				</div>
				<div>
					<h4>{this.props.item.price}</h4>
				</div>
			</div>	
		)
	}
}

export default CartItems;