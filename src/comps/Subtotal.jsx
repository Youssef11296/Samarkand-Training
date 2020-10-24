import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) with total cost <span> </span>
              <strong>{value}</strong>
            </p>
            <div className="subtotal__inputBox">
              <input type="checkbox" />
              <span>This basket has a gift</span>
            </div>
            <button onClick={() => history.push("/review")}>
              Proceed to checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeperator={true}
        displayType="text"
        prefix={"EGP "}
      />
    </div>
  );
};

export default Subtotal;
