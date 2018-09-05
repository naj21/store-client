import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Grid,
  Carousel,
  Jumbotron,
  Image,
  CarouselCaption
} from "react-bootstrap";
import "bootstrap3/dist/css/bootstrap.css";

//components
import SideNav from "./sideNav";
import Cart from "./cart";
import Register from "./register";
import Shop from "./shop";

//images
import samsung from "../images/desola-lanre-ologun-709897-unsplash.jpg";

//styles
import "../styles/home.css";

const dummySentences = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Donec hendrerit tempor tellus.",
  "Donec pretium posuere tellus.",
  "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Nulla posuere.",
  "Donec vitae dolor.",
  "Nullam tristique diam non turpis.",
  "Cras placerat accumsan nulla.",
  "Nullam rutrum.",
  "Nam vestibulum accumsan nisl."
];
const Home = () => {
  return (
    <Grid fluid>
      <Jumbotron className="Jumbotron text-center">
        <h1
          style={{
            marginTop: "10%",
            color: "yellow"
          }}
        >
          Welcome to Rayn
        </h1>
        <p
          style={{
            color: "red"
          }}
        >
          We deal in all kinds of Electronics
        </p>
        <p>
          <Button bsStyle="success">
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "whitesmoke"
              }}
            >
              Login/Register
            </Link>
          </Button>
        </p>
      </Jumbotron>
      <br />
      <br />
      <Row className="show-grid">
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 6).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 4).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 6).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 2).join(" ")}
        </Col>
      </Row>
      <br />
      <br />
      <Row className="show-grid">
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 6).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 4).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 6).join(" ")}
        </Col>
        <Col sm={6} md={3}>
          <br />
          {dummySentences.slice(0, 2).join(" ")}
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
