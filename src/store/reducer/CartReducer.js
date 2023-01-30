const data = {
  carts: [],
  qty: 0,
};

const CartReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.qty == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          cover: action.payload.cover,
          author: action.payload.author,
          price: action.payload.price,
          stocks: action.payload.stocks,
          description: action.payload.description,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            cover: action.payload.cover,
            author: action.payload.author,
            price: action.payload.price,
            stocks: action.payload.stocks,
            description: action.payload.description,
          };
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        qty: state.qty + 1,
      };

    case "INCREASE_QUANTITY":
      state.qty++;
      state.carts[action.payload].quantity++;

      return {
        ...state,
      };
    case "DECREASE_QUANTITY":
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.qty--;
        state.carts[action.payload].quantity--;
      }

      return {
        ...state,
      };

    case "RESET_CART":
      return { carts: [], qty: 0 };

    case "DELETE_CART":
      let quantity_ = state.carts[action.payload].quantity;
      return {
        ...state,
        qty: state.qty - quantity_,
        carts: state.carts.filter((item) => {
          return item.id != state.carts[action.payload].id;
        }),
      };

    default:
      return state;
  }
};

export default CartReducer;
