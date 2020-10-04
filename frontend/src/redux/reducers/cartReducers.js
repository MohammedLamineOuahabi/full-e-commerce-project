import cartActionTypes from "../constants/cartActionTypes.js";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartActionTypes.CART_ADD_ITEM:
      //get the item
      const item = action.payload;

      //check if item exists
      const existItem = state.cartItems.find(x => x.id === item.id);
      if (existItem) {
        //if exists
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.id === existItem.id ? item : x))
        };
      } else {
        //if not exists
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    case cartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.id !== action.payload)
      };

    default:
      return state;
  }
};

export { cartReducer };
