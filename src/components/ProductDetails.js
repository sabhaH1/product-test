import React, { Component } from "react";
import { productdetails } from "../proddetails";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: productdetails,
      url: `/api/product/${this.props.id}`,
      id: 543002
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonFormat = await data.json();
      this.setState({
        product: jsonFormat.product
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { id, name, price, designer, images } = this.state.product;

    return (
      <React.Fragment>
        <div className="pdp-container">
          {images.map((img, index) => {
            return (
              <img
                alt="product"
                key={index}
                className="product-image"
                onClick={this.checkIndex}
              >
                {img}
              </img>
            );
          })}
        </div>
        <div className="product-details">
          <h3 className="product-designer"> {designer} </h3>
          <h3 className="product-name"> {name} </h3>
          <h3 className="product-price"> {price} </h3>
          <h3 className="product-id"> {id} </h3>
        </div>
      </React.Fragment>
    );
  }
}
