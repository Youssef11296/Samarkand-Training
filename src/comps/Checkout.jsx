import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div
          className="checkout__leftImage"
          style={{ backgroundImage: "url('./images/home.jpg')" }}
        ></div>
        <div className="checkout__leftInfo">
          <h2>
            Your Shopping Basket
            {basket?.length === 0 && (
              <p>
                You have no books or products to buy, if you wanna buy just
                click the <br />
                "Add to basket" button next to the product you wanna buy
              </p>
            )}
          </h2>
          <div className="checkout__products">
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                image={product.image}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
