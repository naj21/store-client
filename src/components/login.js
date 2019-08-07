import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {Form, FormGroup, FormControl, InputGroup} from 'react-bootstrap'

//actions
import { login } from '../actions/authActions';
import { addFlashMessage } from '../actions/flashMessages.js';

//styles
import '../styles/login.css';
import 'bootstrap3/dist/css/bootstrap.css';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
				emailAddress: '',
				password: '',
				isLoading : false,
				redirect : false
		}
		this.onSubmit = this.onSubmit.bind(this);
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
		this.props.login(this.state).then(
			(res) => {
				this.setState({
					isLoading: false,
					redirect: true
				});
				this.props.addFlashMessage({
	            type: 'success',
	            text: res.message
	          });
			})
			.catch((err) => {
				this.setState({
					isLoading : false
				});
				this.props.addFlashMessage({
					type: err.response.data.type,
					text: err.response.data.message
				});
			})
	}

	render(){
		var loading = 'Login'
		const { emailAddress, password, isLoading } = this.state;
		if(this.state.redirect){
			return <Redirect to = '/shop'/>
		}
		if(isLoading){
			loading = 'Loading...'
		}
		return(
			<div className="content">
				<div className="bg-image">
					<img src="https://images.unsplash.com/photo-1488485339565-566d63f7dbb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="login" />
				</div>
				<div className='top '>
					<Form className='login' onSubmit={this.onSubmit}>
						<legend>Login</legend>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>@</InputGroup.Addon>
								<FormControl type='text' name='emailAddress' value={emailAddress} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup>
								<InputGroup.Addon>Password</InputGroup.Addon>
								<FormControl type='password' name='password' value={password} onChange={(e)=>this.onChange.call(this, e)} required/>
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<InputGroup className='submit'>
								<button type='submit' disabled={isLoading}>{loading}</button>
							</InputGroup>
						</FormGroup>
					</Form>
				</div>
			</div>
		)
	}
}


export default connect(null, { login, addFlashMessage })(Login);
