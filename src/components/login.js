import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Col,
  Row,
  Grid
} from "react-bootstrap";

//actions
import { login } from "../actions/authActions";

//styles
//import "../styles/login.css";
//import "bootstrap3/dist/css/bootstrap.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      errors: {},
      isLoading: true
    });
    this.props.login(this.state).then(
      res => {
        return <Redirect to="/" />;
        this.setState({
          isLoading: false
        });
      },
      err =>
        this.setState({
          errors: err.response.data.errors,
          isLoading: false
        })
    );
  }

  render() {
    const user = this.props.users.emailAddress;
    const { errors, emailAddress, password, isLoading } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col
            className="text-center"
            sm={12}
            md={8}
            lg={6}
            lgOffset={3}
            mdOffset={2}
          >
            <Form
              action="http://localhost:1337/signin"
              method="POST"
              className="login"
              onSubmit={this.onSubmit}
            >
              <h1>Login to Rayn</h1>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl
                    type="text"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={e => this.onChange.call(this, e)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>Password</InputGroup.Addon>
                  <FormControl
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.onChange.call(this, e)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="submit">
                  <FormControl
                    type="submit"
                    value="Login"
                    disabled={isLoading}
                  />
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  { login }
)(Login);