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

export const fetchSingleDrinkStart = (productId) => ({
  type: ProductsActionTypes.FETCH_SINGLE_DRINK_START,
  payload: productId,
});

export const fetchSingleDrinkSuccess = (singleProduct) => ({
  type: ProductsActionTypes.FETCH_SINGLE_DRINK_SUCCESS,
  payload: singleProduct,
});

export const singleDrinkUnmount = () => ({
  type: ProductsActionTypes.SINGLE_DRINK_UNMOUNT,
});

export const fetchFlavoursStart = (pageNumber, startingPoint) => ({
  type: ProductsActionTypes.FETCH_FLAVOURS_START,
  payload: { pageNumber, startingPoint },
});

export const fetchFlavoursSuccess = (flavours) => ({
  type: ProductsActionTypes.FETCH_FLAVOURS_SUCCESS,
  payload: flavours,
});

export const fetchFlavoursFailure = (errorMessage) => ({
  type: ProductsActionTypes.FETCH_FLAVOURS_FAILURE,
  payload: errorMessage,
});

export const fetchSingleFlavourStart = (flavourId) => ({
  type: ProductsActionTypes.FETCH_SINGLE_FLAVOUR_START,
  payload: flavourId,
});

export const fetchSingleFlavourSuccess = (singleFlavour) => ({
  type: ProductsActionTypes.FETCH_SINGLE_FLAVOUR_SUCCESS,
  payload: singleFlavour,
});

export const singleFlavourUnmount = () => ({
  type: ProductsActionTypes.SINGLE_FLAVOUR_UNMOUNT,
});
