import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings, id } = props.product;
  const handlerCartBtn = props.handlerCartBtn;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>Name: {name}</h4>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        className="cart-btn"
        onClick={() => handlerCartBtn(props.product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
