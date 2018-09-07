import React, { Component } from "react";
import { Glyphicon, Button } from "react-bootstrap";
class CartItems extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.item.image} width={100} height={100} />
        </td>
        <td>
          <h4>{this.props.item.name}</h4>
        </td>
        <td>
          <h4>{this.props.item.price}</h4>
        </td>
        <td>
          <Button>
            <Glyphicon glyph="minus" />
          </Button>
        </td>
      </tr>
    );
  }
}
export default CartItems;
