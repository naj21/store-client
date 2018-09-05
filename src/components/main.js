import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Col, Grid, Jumbotron, Row } from "react-bootstrap";
import "bootstrap3/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../reducers/store";

//components
import Home from "./home";
import Login from "./login";
import SideNav from "./sideNav";
import Cart from "./cart";
import Register from "./register";
import Shop from "./shop";
import FlashMessages from "./flash/FlashMessagesList";

//utils
import requireAuth from "../utils/requireAuth";

//styles
import "../styles/main.css";

const routes = [
  {
    path: "/",
    exact: true,
    //sidebar: ()=><div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/cart",
    main: () => <Cart /> //requireAuth(Cart)
  },
  {
    path: "/login",
    main: () => <Login />
  },
  {
    path: "/register",
    main: () => <Register />
  },
  {
    path: "/shop",
    main: () => <Shop />
  }
];

// function requireAuth(nextState, replace){
// 	if(!sessionStorage.jwt){
// 		replace({
// 			pathname: '/login',
// 			state: {
// 				nextPathname: nextState.location.pathname
// 			}
// 		})
// 	}
// }

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Grid fluid={true} className="main">
          <Row>
            <SideNav />
          </Row>
          <Row>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Row>
        </Grid>
      </Router>
    </Provider>
  );
};

export default Main;
