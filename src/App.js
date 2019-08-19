import React, { Component } from "react";
import "./App.css";
import { product } from "./prodlist";
import ProductList from "./components/ProductList";

class App extends Component {
  state = {
    product: product,
    url: "/api/products",
    id: 373748860
  };

  async getProducts() {
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

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <ProductList product={this.state.product} />
      </React.Fragment>
    );
  }
}
export default App;
