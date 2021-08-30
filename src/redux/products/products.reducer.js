import { ProductsActionTypes } from "./products.types";

const INITIAL_STATE = {
  drinks: null,
  flavours: null,
  total_pages: null,
  current_page: null,
  error: "",
  isFetching: false,
  singleDrink: null,
  singleFlavour: null,
  searchData: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_SEARCH_START:
    case ProductsActionTypes.FETCH_SINGLE_FLAVOUR_START:
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

    case ProductsActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchData: action.payload,
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

    case ProductsActionTypes.FETCH_SINGLE_FLAVOUR_SUCCESS:
      return {
        ...state,
        singleFlavour: action.payload,
        isFetching: false,
      };

    case ProductsActionTypes.SINGLE_DRINK_UNMOUNT:
      return {
        ...state,
        singleDrink: null,
      };

    case ProductsActionTypes.SINGLE_FLAVOUR_UNMOUNT:
      return {
        ...state,
        singleFlavour: null,
      };

    case ProductsActionTypes.FETCH_FLAVOURS_FAILURE:
    case ProductsActionTypes.FETCH_DRINKS_FAILURE:
    case ProductsActionTypes.FETCH_SEARCH_FAILURE:
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
