import React, {Component} from 'react';
import {StaticRouter as Router} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';

//reducers
import '../reducers/store';

//styles
import 'bootstrap3/dist/css/bootstrap.css';
import '../styles/shop.css'

var laptops = [];

class Shop extends Component{
	constructor(props){
		super(props);
		this.state= {
			items: this.props.lenovo
		}

		this.changeLenovo = this.changeLenovo.bind(this);
		this.changeSamsung = this.changeSamsung.bind(this);
		//this.handleAdd = this.handleAdd.bind(this);
	}

	changeLenovo(){
		this.setState({
			items: this.props.lenovo,		
		})
	}

	changeSamsung(){
		this.setState({
			items: this.props.samsung,		
		})
	}

	handleAdd(item){
		laptops.push(item);
		var laptop = [];
		for(let i=0; i<laptops.length; i++){
			if(laptop.indexOf(laptops[i]) === -1){
				laptop.push(laptops[i])
			}
		}
		localStorage.setItem('Laptops', JSON.stringify(laptop));
	}

	render(){
		var {items} = this.state;
		items = items.map((item, index)=>{
			return(
				<div className='item'>
					<img src={item.image} alt={item.name}/>
					<div className="itemDetails">
						<div className='itemName'>
							<div>₦{item.price}</div>
							<div>{item.name}</div>
						</div>
						<button onClick={()=>{this.handleAdd(item)}}><Glyphicon glyph='shopping-cart'/></button>
					</div>		
				</div>
			)
		})

		return(
			<Router>
				<div className = 'shop'>
					<h2>Shop</h2>
					<div className='brand'>
						<Button onClick={this.changeLenovo}>Lenovo</Button>
						<Button onClick={this.changeSamsung}>Samsung</Button>
					</div>
					<div className="items">
						{items}
					</div>
				</div>
			</Router>
		)
	}
}

function mapStateToProps(state){
	return{
	lenovo : state.lenovo,
	samsung : state.samsung
	};
}

export default connect (mapStateToProps)(Shop);