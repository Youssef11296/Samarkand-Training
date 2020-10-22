import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import { useStateValue } from "../context/StateProvider";

const Product = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD",
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <img src={image} className="product__image" />
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <Star key={index} />
            ))}
        </div>
        <div className="product__price">EGP {price}</div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
