import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import {Form, FormGroup, FormControl, InputGroup} from 'react-bootstrap'

//actions
import { userSignupRequest } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessages.js';

//styles
import '../styles/register.css';
import 'bootstrap3/dist/css/bootstrap.css';

var match;

class Register extends Component{
	constructor(props){
		super(props);
		
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
				firstName: '',
				lastName: '',
				emailAddress: '',
				address: '',
				phone: '',
				password: '',
				passwordConfirmation: '',
		        errors: {},
		        isLoading: false,
		        redirect: false
		}
	}

	onChange(e){
		this.setState({
			[e.target.name]  : e.target.value
		})
		match = null;
	}

	onSubmit(e){
		e.preventDefault();
		this.setState({ 
			errors: {}, 
			isLoading: true 
		});
		if(this.state.password ===this.state.passwordConfirmation){
	      	this.props.userSignupRequest(this.state).then(
	        (res) => {
	          this.props.addFlashMessage({
	            type: res.data.type,
	            text: res.data.message
	          });
	          if (res.data.type === 'success'){
		          this.setState({ 
		        	redirect: true  })
	      		}
	      		this.setState({ 
		        	isLoading: false
		        })
	        },
	        (err) => {
	        	this.setState({ 
	        	errors: err.response.data.details, 
	        	isLoading: false,
	        	});
	        	this.props.addFlashMessage({
	            type: 'error',
	            text: this.state.errors
	          });
	    	}
	      );
      }
      else{
      	match = 'Passwords do not match';
      	this.setState({ 
	        	isLoading: false,
	        })
      }
	}

	render(){
		const { isLoading } = this.state;
		if(this.state.redirect){
			return <Redirect to = '/login'/>
		}
		return(
			<div className="content">
				<div className="bg-image">
					<img src="https://images.unsplash.com/photo-1488485339565-566d63f7dbb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="login" />
				</div>
				<div className='top'>
					<Form className='login' onSubmit={this.onSubmit}>
						<legend>Register</legend>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>First Name</InputGroup.Addon>
								<FormControl type='text' name='firstName' value={this.state.firstName} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Last Name</InputGroup.Addon>
								<FormControl type='text' name='lastName' value={this.state.lastName} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>@</InputGroup.Addon>
								<FormControl type='email' name='emailAddress' value={this.state.emailAddress} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Address</InputGroup.Addon>
								<FormControl type='text' name='address' value={this.state.address} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Phone</InputGroup.Addon>
								<FormControl type='text' name='phone' value={this.state.phone} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Password</InputGroup.Addon>
								<FormControl type='password' name='password' value={this.state.password} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Confirm Password</InputGroup.Addon>
								<FormControl type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<p className='match'>{match}</p>
						<FormGroup>
							<InputGroup className='submit'>
								<button type='submit' disabled={isLoading}>Register</button>
								<Link to='/login'>Already a member?</Link>	
							</InputGroup>
						</FormGroup>
					</Form>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		userSignupRequest: userSignupRequest, 
		addFlashMessage: addFlashMessage
	},
		dispatch)
}

export default connect(null,  mapDispatchToProps)(Register);
