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
	            text: res.data.message
	          });
			},
			(err) => {
				this.setState({
				isLoading : false
			});
			this.props.addFlashMessage({
            type: 'error',
            text: err.data.message
          });
			}
		)
	}

	render(){
		const user= this.props.users.emailAddress
		const { emailAddress, password, isLoading } = this.state;
		if(this.state.redirect){
			return <Redirect to = '/shop'/>
		}
		return(
			<div className='top '>
				<Form action='http://localhost:1337/signin' method='POST' className='login' onSubmit={this.onSubmit}>
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
							<FormControl type='submit' value='Login' disabled={isLoading}/>
						</InputGroup>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
	users: state.users
	}
}

export default connect((mapStateToProps), { login, addFlashMessage })(Login);
