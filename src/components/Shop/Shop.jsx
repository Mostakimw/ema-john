import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    let saveCart = [];
    // ! step: 1 - get id from stored cart
    for (const id in storedCart) {
      // ! step 2 - find id wala products from all products array
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // ! step 3- set quantity on addedproducts
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // ! step 4 - push the added products in a new array
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  const handlerCartBtn = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shopping-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handlerCartBtn={handlerCartBtn}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
