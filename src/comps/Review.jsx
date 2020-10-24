import React from "react";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import "./Review.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

const Review = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={`review ${basket?.length === 0 && `grid`}`}>
      {basket?.length === 0 ? (
        <p className="review__message">
          You have no books or products to buy
          <br />
          <Link to="/" className="review__message__link">
            Back to the home
          </Link>
        </p>
      ) : (
        <div className="review__container">
          <div className="review__header">
            <h1>
              You select <span> </span>
              <Link to="/checkout" className="review__link">
                {basket.length} items <span> </span>
              </Link>
              to buy
            </h1>
          </div>
          <div className="review__section">
            <div className="review__title">
              <h2>Personal details : </h2>
            </div>
            <div className="review__info">
              <p>
                <strong>Address : </strong> Beni-Suef, 23 Salah Salem st.
              </p>
            </div>
          </div>
          <div className="review__section review__basket">
            <div className="review__title">
              <h2>Basket review : </h2>
            </div>
            <div className="review__info">
              {basket.map((product) => (
                <CheckoutProduct
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  rating={product.rating}
                  price={product.price}
                  className="checkout__product"
                />
              ))}
            </div>
          </div>
          <div className="review__section">
            <div className="review__title">
              <h2>Total cost : EGP {getBasketTotal(basket)}</h2>
            </div>
            <div className="review__info">
              <button>Buy now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
