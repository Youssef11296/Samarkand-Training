import { Star } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <div className="checkout__product">
      <img src={image} className="checkout__productImage" />
      <div className="checkout__productInfo">
        <h3 class="checkout__productTitle">{title}</h3>

        <div className="checkout__productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star />
            ))}
        </div>
        <div className="checkout__productPrice">
          <strong>EGP {price}</strong>
        </div>
        <button onClick={removeProduct}>Remove from the basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
