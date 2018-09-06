import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../reducers/store";
import {
  Button,
  Row,
  Col,
  Grid,
  Jumbotron,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import "bootstrap3/dist/css/bootstrap.css";
//actions
import { logout } from "../actions/authActions";

//components
import FlashMessageList from "./flash/FlashMessagesList";

//styles
import "../styles/sideNav.css";
import "bootstrap3/dist/css/bootstrap.css";

class SideNav extends Component {
  handleLogout() {
    this.props.logout();
    <Redirect to="home" />;
  }

  render() {
    const fname = this.props.users.firstName,
      lname = this.props.users.lastName;
    if (this.props.isAuthenticated === true) {
      var logout = (
        <Button
          className="logout"
          onClick={() => {
            this.handleLogout();
          }}
        >
          LOGOUT
        </Button>
      );
    }

    return (
      <Grid fluid={true} className="main">
        <Row>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke"
                  }}
                >
                  Rayn
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke"
                  }}
                >
                  Register{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke"
                  }}
                >
                  Login{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke"
                  }}
                >
                  Shop
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke"
                  }}
                >
                  Cart
                </Link>
              </NavItem>
              <NavItem>{logout}</NavItem>
            </Nav>
          </Navbar>
          <Provider store={store}>
            <FlashMessageList />
          </Provider>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(SideNav);
