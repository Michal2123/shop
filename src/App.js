import React, { Component } from "react";
import Content from "./shred/Content";

class App extends Component {
  state = {
    products: [],
    isUserLogIn: false,
    user: {
      userName: "",
      address: {
        street: "",
        zipCode: ""
      },
      userEmail: ""
    },
    cart: [],
    prodIsLoad: true
  };

  createUser = (user, isUserLogIn) => {
    this.setState({
      user: user,
      isUserLogIn: isUserLogIn
    });
  };

  addToCart = id => {
    const products = [...this.state.products.Products];
    const productIndex = products.findIndex(product => product.id === id);

    const cart = this.state.cart.map(item => item);
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) {
      cart.push({
        id: products[productIndex].id,
        product: products[productIndex].product,
        image: products[productIndex].image,
        price: products[productIndex].price,
        sumPrice: products[productIndex].price,
        count: 1
      });
    } else {
      cart[index].count += 1;
      cart[index].sumPrice = cart[index].price * cart[index].count;
    }
    this.setState({
      cart
    });
  };

  deleteFromCart = id => {
    let cart = [...this.state.cart];

    const index = cart.findIndex(item => item.id === id);
    if (cart[index].count > 1) {
      cart[index].count -= 1;
      cart[index].sumPrice -= cart[index].price;
    } else {
      cart.splice(index, 1);
    }
    this.setState({
      cart
    });
  };

  resetCart = () => {
    this.setState({
      cart: []
    });
  };

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    fetch("https://michal2123.github.io/db/db.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data,
          prodIsLoad: true
        })
      )
      .catch(() =>
        this.setState({
          prodIsLoad: false
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Content
          cart={this.state.cart}
          products={this.state.products}
          isUserLogIn={this.state.isUserLogIn}
          createUser={this.createUser}
          addToCart={this.addToCart}
          deleteFromCart={this.deleteFromCart}
          resetCart={this.resetCart}
          prodIsLoad={this.state.prodIsLoad}
        />
      </div>
    );
  }
}

export default App;
