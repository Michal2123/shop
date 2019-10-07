import React from "react";

const Product = props => {
  return (
    <div className="Product">
      <div className="ProductDesc">
        <h3>{props.name}</h3>
        <p>Price: {props.price} PLN</p>
        {props.pageId === "cart" ? (
          <>
            <p>Count: {props.count}</p>
            <button onClick={() => props.cartButtonPlus(props.id)}>Add</button>
          </>
        ) : null}
        <button onClick={() => props.buttonClick(props.id)}>
          {props.buttonText}
        </button>
      </div>
      <div className="ProductImg">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
};

export default Product;
