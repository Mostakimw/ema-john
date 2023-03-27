import React from "react";

const Product = (props) => {
  const { img, name, price, ratings } = props.product;
  return (
    <div>
      <h1>products here: {name}</h1>
    </div>
  );
};

export default Product;
