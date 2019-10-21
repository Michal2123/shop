import React, { Component } from "react";

import ProductList from "../components/ProductList";
import Input from "../components/Input";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      street: "",
      zipCode: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmmitt = e => {
    e.preventDefault();

    if (
      (this.state.userName.length === 0 || !this.state.userName.trim()) &&
      !this.state.userEmail.includes("@") &&
      (this.state.street.length === 0 || !this.state.street.trim()) &&
      (this.state.zipCode.length === 0 || !this.state.zipCode.trim())
    ) {
      return;
    } else {
      const user = {
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        adress: {
          street: this.state.street,
          zipCode: this.state.zipCode
        }
      };
      this.props.createUser(user, true);
      alert("Products has been send.");
      this.setState({
        userName: "",
        userEmail: "",
        street: "",
        zipCode: ""
      });
      this.props.resetCart();
    }
  };

  render(props) {
    let sumPrice = 0;
    if (this.props.cart.length > 0) {
      this.props.cart.forEach(element => {
        sumPrice += element.sumPrice;
      });
    }
    return (
      <div className="Cart">
        <div>
          {" "}
          {this.props.cart.length > 0 && this.props.products.Products ? (
            <div className="InnerCart">
              <ProductList
                id="cart"
                cart={this.props.cart}
                buttonClick={this.props.deleteFromCart}
                buttonText="Delete form cart"
                cartButtonPlus={this.props.cartButtonPlus}
              />
              <form
                onSubmit={this.handleSubmmitt}
                style={{ minWidth: "200px" }}
              >
                <Input
                  isValid={
                    this.state.userName.length === 0 ||
                    !this.state.userName.trim()
                      ? "Please fill this field."
                      : null
                  }
                  onChange={this.handleChange}
                  value={this.state.userName}
                  type="text"
                  name="userName"
                  id="name"
                  label="User name:"
                />

                <Input
                  isValid={
                    !this.state.userEmail.includes("@")
                      ? `Please fill this field / missing char "@".`
                      : null
                  }
                  onChange={this.handleChange}
                  value={this.state.userEmail}
                  type="text"
                  name="userEmail"
                  id="mail"
                  label="Email:"
                />

                <Input
                  isValid={
                    this.state.street.length === 0 || !this.state.street.trim()
                      ? "Please fill this field."
                      : null
                  }
                  errorMessage="Please fill this field."
                  onChange={this.handleChange}
                  value={this.state.street}
                  type="text"
                  name="street"
                  id="street"
                  label="Street:"
                />

                <Input
                  isValid={
                    this.state.zipCode.length === 0 ||
                    !this.state.zipCode.trim()
                      ? "Please fill this field."
                      : null
                  }
                  onChange={this.handleChange}
                  value={this.state.zipCode}
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  label="Zip code:"
                />

                <h3>
                  Payment summary: {sumPrice}{" "}
                  <span style={{ fontSize: "20px", color: "white" }}>PLN</span>
                </h3>
                <button>Send products</button>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <h1 style={{ marginTop: "10%" }}>Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
