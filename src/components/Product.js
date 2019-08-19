import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { name, price, designer, image } = this.props.product;
    return (
      <React.Fragment>
        <div className="product-container">
          <img src={image} className="product-image" alt="product" />
          <div className="product-designer">{designer}</div>
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
      </React.Fragment>
    );
  }
}
