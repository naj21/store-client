import React, {Component} from 'react';
import {StaticRouter as Router} from 'react-router-dom';
import {Button, Col, Row, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions
import {selectLaptop} from '../actions/index';

//reducers
import '../reducers/store';

//styles
import 'bootstrap3/dist/css/bootstrap.css';
import '../styles/shop.css'

class Shop extends Component{
	constructor(props){
		super(props);
		this.state= {
			items: this.props.lenovo
		}

		this.changeLenovo = this.changeLenovo.bind(this);
		this.changeSamsung = this.changeSamsung.bind(this);
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

	render(){
		var {items} = this.state;
		items = items.map((item, index)=>{
			return(
				<Col sm={6} lg={4} className='items'>
					<img src={item.image}/>
					<Col xs={8} className='itemName'>
						<Row>₦{item.price}</Row>
						<Row>{item.name}</Row>
					</Col>
					<Col xs={2} xsOffset={2} className='cartLink'>
						<Button onClick={()=>{this.props.selectLaptop(item)}}><Glyphicon glyph='shopping-cart'/></Button>
					</Col>		
				</Col>
			)
		})

		return(
			<Router>
				<Row className='top'>
					<div className = 'shop'>
						<h2>Shop</h2>
						<Col xs={12} className='brand'>
							<Button onClick={this.changeLenovo}>Lenovo</Button>
							<Button onClick={this.changeSamsung}>Samsung</Button>
						</Col>
						<Row>
							{items}
						</Row>
					</div>
				</Row>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectLaptop: selectLaptop}, dispatch)
}


export default connect (mapStateToProps, mapDispatchToProps)(Shop);