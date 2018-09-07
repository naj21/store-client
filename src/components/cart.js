import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Grid, Row, Col, Button } from "react-bootstrap";

//actions
import { order } from "../actions/orderActions";

//components
import CartItems from "./cartItems";

//reucers
import "../reducers/store";

//styles

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  handleOrder = orders => {
    this.props.order(orders);
  };
  render() {
    const user = this.props.users.emailAddress;
    const order = [];
    let list = "";
    const cart = JSON.parse(localStorage.getItem("Laptops"));
    let amount = 0;
    if (cart !== null) {
      const { laptops } = cart;
      for (const laptop in laptops) {
        if (laptops.hasOwnProperty(laptop)) {
          const element = laptops[laptop];
          amount += element.price;
          order.push(element);
        }
      }
      list = order.map((item, index) => {
        return <CartItems item={item} key={index} />;
      });
    }

    return (
      <Grid>
        <Row>
          <form action="http://localhost:1337/order">
            <Col
              className="text-center"
              sm={12}
              md={8}
              lg={8}
              lgOffset={2}
              mdOffset={2}
            >
              <h2>Your Shopping Cart</h2>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Del</th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </Table>
            </Col>
          </form>
        </Row>
        <Row>
          <Col
            md={4}
            lg={4}
            lgPull={2}
            mdPull={2}
            lgPush={2}
            mdPush={2}
            className="total"
          >
            Total:
            {amount}
          </Col>
          <Col
            md={4}
            lg={4}
            lgPush={2}
            mdPush={2}
            lgPull={2}
            mdPull={2}
            className="submit"
          >
            <Button
              type="submit"
              className="btn-success"
              onSubmit={this.handleOrder(order)}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      </Grid>

      // <div className='top'>
      //
      //
      // 	<Row>
      // 		<Col sm={12} md={8} className='cartDetails'>
      // 			<Row>
      // 				<Col xs={6}>
      // 				</Col>
      // 				<Col xs={4}>
      // 					<h4>Name</h4>
      // 				</Col>
      // 				<Col xs={2}>
      // 					<h4>Price</h4>
      // 				</Col>
      // 			</Row>
      // 			{cart}
      // 		</Col>
      //
      // 	</Row>
      // 	</form>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      order: order
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
