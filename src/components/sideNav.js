import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { logout } from '../actions/authActions';
import { deleteAllFlashMessage } from '../actions/flashMessages';

//styles
import '../styles/sideNav.css';
import 'bootstrap3/dist/css/bootstrap.css';

var fname; 
var lname;
class SideNav extends Component{
	handleLogout() {
		this.props.logout();
		return <Redirect to='home'/>
	}

	render(){
		var link;
	if(this.props.isAuthenticated===true){
        link =  <a onClick={()=>{this.handleLogout()}}>LOGOUT</a>
        fname = this.props.users.firstName.charAt(0);
		lname = this.props.users.lastName.charAt(0);
      } else {
		  link = <Link to='/register' activeStyle={{color: 'blue'}}> REGISTER </Link>
	  }
	return(
			<div className='sideNav'>
				<h1 className='logo'><Link to='/' style={{textDecoration:'none'}} 
				activeStyle={{color: 'blue'}}>Rayn</Link></h1>
				{link}
				<Link to='/shop'>SHOP</Link>
				<Link to='/cart'>CART</Link>
				<span className={!this.props.isAuthenticated && 'hide'}>{fname}.{lname}</span>
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