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
import '../styles/sideNav.css';
import 'bootstrap3/dist/css/bootstrap.css';

var fname; 
var lname;
class SideNav extends Component{
	handleLogout(){
		this.props.logout();
		<Redirect to='home'/>
	}

	render(){
	if(this.props.isAuthenticated===true){
        var logout =  <Button className='logout' onClick={()=>{this.handleLogout()}}>LOGOUT</Button>
         fname = this.props.users.firstName.charAt(0),
			lname = this.props.users.lastName.charAt(0);
      }

	return(
			<div className='sideNav'>
				<h1 className='logo'><Link to='/' style={{textDecoration:'none', color:'darkRed'}} 
				activeStyle={{color: 'blue'}}>Rayn</Link></h1>
				<div className='links'>
					<pre hidden={!this.props.isAuthenticated}>{fname}.{lname}</pre>
	
					<ul>
						<li><Link to='/register' style={{textDecoration:'none', color:'#dcdcdc'}}
						activeStyle={{color: 'blue'}}> REGISTER </Link></li>
						<li><Link to='/shop' style={{textDecoration:'none', color:'#dcdcdc'}}>SHOP</Link></li>
						<li><Link to='/cart' style={{textDecoration:'none', color:'#dcdcdc'}}>CART</Link></li>
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