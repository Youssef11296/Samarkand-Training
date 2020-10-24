export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
