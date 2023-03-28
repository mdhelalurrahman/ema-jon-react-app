import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  //   console.log(props.product);

  const {img, name, ratings, seller, price} = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p>Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating : {ratings} stars</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}>
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
