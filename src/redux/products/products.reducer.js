import ProductCard from "../../components/product-card/product-card.component";
import { ProductsActionTypes } from "./products.types";

const INITIAL_STATE = {
  drinks: null,
  flavours: null,
  total_pages: null,
  current_page: null,
  error: "",
  isFetching: false,
  singleDrink: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_SINGLE_DRINK_START:
    case ProductsActionTypes.FETCH_FLAVOURS_START:
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

    case ProductsActionTypes.FETCH_FLAVOURS_SUCCESS:
      return {
        ...state,
        flavours: action.payload,
        isFetching: false,
      };

    case ProductsActionTypes.FETCH_SINGLE_DRINK_SUCCESS:
      return {
        ...state,
        singleDrink: action.payload,
        isFetching: false,
      };

    case ProductsActionTypes.SINGLE_DRINK_UNMOUNT:
      return {
        ...state,
        singleDrink: null,
      };

    case ProductsActionTypes.FETCH_FLAVOURS_FAILURE:
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
