import React, { Component } from "react";
import "../styles/Cart.css";
import ProductList from "../components/ProductList";
import Input from "../components/Input";

class Cart extends Component {
  state = {
    userName: "",
    userEmail: "",
    street: "",
    zipCode: "",
    errorName: false,
    errorMail: false,
    errorStreet: false,
    errorZipCode: false
  };

  error = {
    errorName: false,
    errorMail: false,
    errorStreet: false,
    errorZipCode: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmmitt = e => {
    e.preventDefault();
    const { userName, userEmail, street, zipCode } = this.state;

    if (userName.length === 0) {
      this.setState({ errorName: true });
      this.error.errorName = true;
    } else {
      this.setState({ errorName: false });
      this.error.errorName = false;
    }
    if (userName.length === 0 || userEmail.indexOf("@") === -1) {
      this.setState({ errorMail: true });
      this.error.errorMail = true;
    } else {
      this.setState({ errorMail: false });
      this.error.errorMail = false;
    }
    if (street.length === 0) {
      this.setState({ errorStreet: true });
      this.error.errorStreet = true;
    } else {
      this.setState({ errorStreet: false });
      this.error.errorStreet = false;
    }
    if (zipCode.length === 0) {
      this.setState({ errorZipCode: true });
      this.error.errorZipCode = true;
    } else {
      this.setState({ errorZipCode: false });
      this.error.errorZipCode = false;
    }

    if (
      !this.error.errorName &&
      !this.error.errorMail &&
      !this.error.errorStreet &&
      !this.error.errorZipCode
    ) {
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
          {this.props.cart.length > 0 ? (
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
                  errorName={this.state.errorName}
                  errorMessage="Please fill this field."
                  onChange={this.handleChange}
                  value={this.state.userName}
                  type="text"
                  name="userName"
                  id="name"
                  label="User name:"
                />

                <br />
                <Input
                  errorName={this.state.errorMail}
                  errorMessage={`Please fill this field / missing char "@".`}
                  onChange={this.handleChange}
                  value={this.state.userEmail}
                  type="text"
                  name="userEmail"
                  id="mail"
                  label="Email:"
                />

                <br />
                <Input
                  errorName={this.state.errorStreet}
                  errorMessage="Please fill this field."
                  onChange={this.handleChange}
                  value={this.state.street}
                  type="text"
                  name="street"
                  id="street"
                  label="Street:"
                />

                <br />
                <Input
                  errorName={this.state.errorZipCode}
                  errorMessage="Please fill this field."
                  onChange={this.handleChange}
                  value={this.state.zipCode}
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  label="Zip code:"
                />

                <br />
                <h3>
                  Payment summary: {sumPrice}{" "}
                  <span style={{ fontSize: "20px" }}>PLN</span>
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
