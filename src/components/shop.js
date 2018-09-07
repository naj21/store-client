import React, { Component } from "react";
import { StaticRouter as Router } from "react-router-dom";
import { Button, Col, Row, Glyphicon, Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//reducers
import "../reducers/store";

//styles
import "bootstrap3/dist/css/bootstrap.css";
import "../styles/shop.css";

const laptops = [];

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.lenovo
    };

    this.changeLenovo = this.changeLenovo.bind(this);
    this.changeSamsung = this.changeSamsung.bind(this);
    //this.handleAdd = this.handleAdd.bind(this);
  }

  changeLenovo() {
    this.setState({
      items: this.props.lenovo
    });
  }

  changeSamsung() {
    this.setState({
      items: this.props.samsung
    });
  }

  handleAdd(item) {
    laptops.push(item);
    localStorage.setItem(
      "Laptops",
      JSON.stringify({ laptops: { ...laptops } })
    );
  }

  render() {
    var { items } = this.state;
    items = items.map((item, index) => {
      return (
        <Col sm={6} md={4} lg={4} className="items">
          <img src={item.image} width={100} height={100} />
          <Col xs={8} className="itemName">
            <Row>₦{item.price}</Row>
            <Row>{item.name}</Row>
          </Col>
          <Col xs={2} xsOffset={2} className="cartLink">
            <Button
              onClick={() => {
                this.handleAdd(item);
              }}
            >
              <Glyphicon glyph="shopping-cart" />
            </Button>
          </Col>
        </Col>
      );
    });

    return (
      <Grid>
        <Row className="text-center">
          <h2>Shop</h2>
          <Col md={4} lg={4} sm={12}>
            <Button onClick={this.changeLenovo} className="btn-info">
              Lenovo
            </Button>
            <Button onClick={this.changeSamsung} className="btn-success">
              Samsung
            </Button>{" "}
          </Col>
          <Col md={8} lg={8} smHidden>
            {" "}
          </Col>
        </Row>
        <Row>{items}</Row>
      </Grid>
      // <Router>
      // 	<Row className='top'>
      // 		<div className = 'shop'>
      // 			<h2>Shop</h2>
      // 			<Col xs={12} className='brand'>
      //
      // 			</Col>
      // 			<Row>
      // 				{items}
      // 			</Row>
      // 		</div>
      // 	</Row>
      // </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    lenovo: state.lenovo,
    samsung: state.samsung
  };
}

export default connect(mapStateToProps)(Shop);
