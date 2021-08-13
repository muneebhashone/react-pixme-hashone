import { ProductsActionTypes } from "./products.types";

const INITIAL_STATE = {
  drinks: null,
  total_pages: null,
  current_page: null,
  error: "",
  isFetching: true,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_DRINKS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ProductsActionTypes.FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.payload,
        isFetching: false,
      };

    case ProductsActionTypes.FETCH_DRINKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productsReducer;
