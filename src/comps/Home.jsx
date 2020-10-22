import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img src="./images/home20.jpg" />
      <div className="home__row">
        <Product
          id="1"
          title="Product One"
          image="./images/1.jpg"
          rating={5}
          price={22.99}
        />
        <Product
          id="2"
          title="Product Two"
          image="./images/2.jpg"
          rating={2}
          price={60.99}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Product Three"
          image="./images/3.jpg"
          rating={4}
          price={40.99}
        />
        <Product
          id="4"
          title="Product Four"
          image="./images/4.jpg"
          rating={3}
          price={20.99}
        />
        <Product
          id="5"
          title="Product Five"
          image="./images/5.jpg"
          rating={4}
          price={80.99}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Product Six"
          image="./images/6.jpg"
          rating={4}
          price={90.99}
        />
      </div>
    </div>
  );
};

export default Home;
