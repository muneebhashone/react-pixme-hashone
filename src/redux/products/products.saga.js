import axios from "axios";
import {
  fetchDrinksSuccess,
  fetchDrinksFailure,
  fetchSingleDrinkSuccess,
  fetchFlavoursSuccess,
  fetchFlavoursFailure,
} from "./products.action";
import { ProductsActionTypes } from "./products.types";
import { put, call, all, takeLatest } from "redux-saga/effects";

// Request Handlers
function fetchDrinksRequest(pageNumber, startingPoint) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesWeb?page=${pageNumber}&starting_point=${startingPoint}`
  );
}

function fetchSingleDrinkRequest(productId) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getSingleWineById/${productId}`
  );
}

function fetchFlavoursRequest(pageNumber, startingPoint) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesFlavoursWeb?page=${pageNumber}&starting_point=${startingPoint}`
  );
}

// Sagas
function* fetchDrinksStart({ payload: { pageNumber, startingPoint } }) {
  try {
    const { data } = yield call(fetchDrinksRequest, pageNumber, startingPoint);
    yield put(fetchDrinksSuccess(data));
  } catch (err) {
    console.log("Error", err.message);
    yield put(fetchDrinksFailure(err.message));
  }
}

function* fetchSingleDrinkStart({ payload }) {
  try {
    const { data } = yield call(fetchSingleDrinkRequest, payload);
    if (data.data) {
      yield put(fetchSingleDrinkSuccess(data.data));
    } else {
      yield put(fetchDrinksFailure("Error Occured"));
    }
  } catch (err) {
    console.log("Error", err.message);
    yield put(fetchDrinksFailure(err.message));
  }
}

function* fetchFlavoursStart({ payload: { pageNumber, startingPoint } }) {
  try {
    const { data } = yield call(
      fetchFlavoursRequest,
      pageNumber,
      startingPoint
    );
    yield put(fetchFlavoursSuccess(data));
  } catch (err) {
    console.log("Error", err.message);
    yield put(fetchFlavoursFailure(err.message));
  }
}

// Root Saga
export function* productsSaga() {
  yield all([
    takeLatest(ProductsActionTypes.FETCH_DRINKS_START, fetchDrinksStart),
    takeLatest(
      ProductsActionTypes.FETCH_SINGLE_DRINK_START,
      fetchSingleDrinkStart
    ),
    takeLatest(ProductsActionTypes.FETCH_FLAVOURS_START, fetchFlavoursStart),
  ]);
}
