import React, {Component} from 'react';
import {Row, Col, ControlLabel, Form, Button, FormGroup, FormFeedback, FormControl, HelpBlock, InputGroup} from 'react-bootstrap'
import 'bootstrap3/dist/css/bootstrap.css' 

//styles
import '../styles/login.css';

class Login extends Component{
	render(){
		return(
			<div>

				<Form action='' method='POST' className='login'>
					<h3>LOGIN</h3>
					<FormGroup >
						<ControlLabel>Username</ControlLabel>
						<FormControl type='text' inputRef='username' required/>	
						<HelpBlock>email can be used as username</HelpBlock>				
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
							<FormControl type='password' inputRef='password' required/>
					</FormGroup>
					<FormGroup className='submit'>
						<FormControl type='submit' value='Login' inputRef='login' />
					</FormGroup>
				</Form>



				<Form action='' method='POST' className='login'>
					<FormGroup >
						<ControlLabel>TITLE</ControlLabel>
						<FormControl type='text' inputRef='username' required/>	
					</FormGroup>
					<FormGroup className='submit'>
						<FormControl type='submit' value='Submit' inputRef='submit' />
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default Login;