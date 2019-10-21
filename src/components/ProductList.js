import React from "react";
import Product from "./Product";

const ProductList = props => {
  let list = [];
  if (props.id === "products") {
    list = props.products.Products;
  } else if (props.id === "cart") {
    list = props.cart;
  }
  const product = list.map(product => (
    <div className="ProductDiv" key={product.id}>
      <Product
        name={product.product}
        img={product.image}
        price={product.price}
        count={product.count}
        id={product.id}
        pageId={props.id}
        cartButtonPlus={props.cartButtonPlus}
        buttonClick={props.buttonClick}
        buttonText={props.buttonText}
      />
    </div>
  ));
  return <div className="ProductList">{product}</div>;
};

export default ProductList;
