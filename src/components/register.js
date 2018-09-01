import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Row, Col, Form, Button, FormGroup, FormFeedback, FormControl, InputGroup} from 'react-bootstrap'

//actions
import { userSignupRequest } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessages.js';

//styles
import '../styles/register.css';
import 'bootstrap3/dist/css/bootstrap.css';

class Register extends Component{
	constructor(props){
		super(props);
		
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
				firstName: '',
				lastName: '',
				emailAddress: '',
				country: '',
				state: '',
				address: '',
				phone: '',
				password: '',
				passwordConfirmation: '',
		        errors: {},
		        isLoading: false
		}
	}

	onChange(e){
		this.setState({
			[e.target.name]  : e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		this.setState({ 
			errors: {}, 
			isLoading: true 
		});
      	this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.setState({ 
        	isLoading: false })
        },
        (err) => this.setState({ 
        	errors: err.response.data, 
        	isLoading: false })
      );
	}

	render(){
		const { errors, isLoading } = this.state;
		return(
			<div className='top'>
				<Form action='http://localhost:1337/signup' method='POST' className='login' onSubmit={this.onSubmit}>
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
							<FormControl type='text' name='lastName' value={this.state.lastName} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>@</InputGroup.Addon>
							<FormControl type='email' name='emailAddress' value={this.state.emailAddress} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Country</InputGroup.Addon>
							<FormControl type='text' name='country' value={this.state.country} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>State</InputGroup.Addon>
							<FormControl type='text' name='state' value={this.state.state} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Address</InputGroup.Addon>
							<FormControl type='text' name='address' value={this.state.address} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Phone</InputGroup.Addon>
							<FormControl type='text' name='phone' value={this.state.phone} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Password</InputGroup.Addon>
							<FormControl type='password' name='password' value={this.state.password} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Confirm Password</InputGroup.Addon>
							<FormControl type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={(e)=>this.onChange.call(this, e)}/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup className='submit'>
							<FormControl type='submit' value='Register' disabled={isLoading}/>
							<Link to='/login'>Already a member?</Link>	
						</InputGroup>
					</FormGroup>
				</Form>
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
