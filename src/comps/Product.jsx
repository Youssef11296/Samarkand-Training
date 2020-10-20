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
    <div className="product">
      <div className="product__info">
        <h4 className="product__title">{title}</h4>
        <img src={image} className="product__image" />
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star />
            ))}
        </div>
        <div className="product__price">EGP {price}</div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
