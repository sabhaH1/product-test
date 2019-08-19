import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="plp-container">
          {product.map(product => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Product />
      </React.Fragment>
    );
  }
}
