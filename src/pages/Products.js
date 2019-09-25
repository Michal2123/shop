import React from "react";
import "../styles/Products.css";
import ProductList from "../components/ProductList";

const Products = props => {
  return (
    <div className="Products">
      {props.products.Products !== undefined ? (
        <ProductList
          products={props.products}
          buttonClick={props.addToCart}
          id="products"
          buttonText="Add to cart"
        />
      ) : null}
    </div>
  );
};

export default Products;
