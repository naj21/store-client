import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../reducers/store';

//actions
import { logout } from '../actions/authActions';
import { deleteAllFlashMessage } from '../actions/flashMessages';

//components
import FlashMessageList from './flash/FlashMessagesList';

//styles
import '../styles/sideNav.css'
import 'bootstrap3/dist/css/bootstrap.css';

var count = 0;

class SideNav extends Component{
	handleLogout(){
		this.props.logout();
		<Redirect to='home'/>
	}

	componentWillMount(){
		let number = JSON.parse(localStorage.getItem('Laptops'));
		if (number !== null){
			count = number.length;
		}
	}

	handleFlash(){
		this.props.deleteAllFlashMessage();
	}

	render(){
		const fname = this.props.users.firstName,
			lname = this.props.users.lastName;
	if(this.props.isAuthenticated===true){
        var logout =  <Button className='logout' onClick={()=>{this.handleLogout()}}>LOGOUT</Button>
      }

	return(
			<div className='sideNav'>
				<h1 className='logo'><Link to='/'>Rayn</Link></h1>
				<div className='links'>
					<pre>{fname}  {lname}</pre>
	
					<ul>
						<li><Link to='/register' onClick={()=>{this.handleFlash}} className='link'> REGISTER </Link></li>
						<li><Link to='/shop' onClick={()=>{this.handleFlash}}>SHOP</Link></li>
						<li><Link to='/cart' onClick={()=>{this.handleFlash}}>CART ({count})</Link></li>
						{logout}
						<Provider store={store}><FlashMessageList/></Provider>
					</ul>
				</div>
			</div>
		)
	}  
}


  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
		users: state.users

    };
  }

  export default connect(mapStateToProps, {logout, deleteAllFlashMessage})(SideNav);