import React from "react";
import "../styles/Content.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Footer from "./Footer";

const Content = props => {
  return (
    <div className="wrapper">
      <Router>
        <div className="Header">
          <Navigation cart={props.cart} />
        </div>
        <section className="Content">
          <div className="InnerContent">
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/products"
              render={() => (
                <Products
                  products={props.products}
                  addToCart={props.addToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  cart={props.cart}
                  isUserLogIn={props.isUserLogIn}
                  createUser={props.createUser}
                  deleteFromCart={props.deleteFromCart}
                  cartButtonPlus={props.addToCart}
                  resetCart={props.resetCart}
                />
              )}
            />
          </div>
        </section>
      </Router>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
