import { ProductsActionTypes } from "./products.types";

export const fetchDrinksStart = (pageNumber, startingPoint) => ({
  type: ProductsActionTypes.FETCH_DRINKS_START,
  payload: { pageNumber, startingPoint },
});

export const fetchDrinksSuccess = (products) => ({
  type: ProductsActionTypes.FETCH_DRINKS_SUCCESS,
  payload: products,
});

export const fetchDrinksFailure = (errorMessage) => ({
  type: ProductsActionTypes.FETCH_DRINKS_FAILURE,
  payload: errorMessage,
});
