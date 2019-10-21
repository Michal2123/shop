import React from "react";
import "../styles/Products.css";
import ProductList from "../components/ProductList";
import AdBlockError from "../error/adBlockError";

const Products = props => {
  return (
    <div className="Products">
      {props.products.Products ? (
        <ProductList
          products={props.products}
          buttonClick={props.addToCart}
          id="products"
          buttonText="Add to cart"
        />
      ) : (
        <AdBlockError />
      )}
    </div>
  );
};

export default Products;
