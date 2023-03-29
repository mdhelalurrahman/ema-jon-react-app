import React, {useEffect, useState} from "react";
import {addToDb, getShoppingCart} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product.id);
    // console.log(cart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCard = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step:2  get product from products sate by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        console.log(addedProduct);
        // step 3  add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console(addedProduct);
        // step 4 add the added product to the saved cart
        savedCard.push(addedProduct);
      }
    }
    // step 5: ste the cart
    setCart(savedCard);
  }, [products]);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
