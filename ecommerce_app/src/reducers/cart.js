const initialState = {
    items: []
  };
  //This function is used to make use of redux package to manage states.
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  