import axios from "axios";
import {
  fetchDrinksSuccess,
  fetchDrinksFailure,
  fetchSingleDrinkSuccess,
  fetchFlavoursSuccess,
  fetchFlavoursFailure,
  fetchSingleFlavourSuccess,
  fetchSearchSuccess,
  fetchSearchFailure,
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

function fetchSingleFlavourRequest(wineId) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getSingleWineFlavourById/${wineId}`
  );
}

function fetchFlavoursRequest(pageNumber, startingPoint) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesFlavoursWeb?page=${pageNumber}&starting_point=${startingPoint}`
  );
}

function fetchSearchRequest(query, type) {
  if (type === "spirits") {
    return axios.get(
      `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesWeb?page=1&starting_point=0&search=${query}`
    );
  }

  if (type === "ingredients") {
    return axios.get(
      `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesFlavoursWeb?page=1&starting_point=0&search=${query}`
    );
  }
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

function* fetchSingleFlavourStart({ payload }) {
  try {
    const { data } = yield call(fetchSingleFlavourRequest, payload);
    if (data.data) {
      yield put(fetchSingleFlavourSuccess(data.data));
    } else {
      yield put(fetchFlavoursFailure("Error Occured"));
    }
  } catch (err) {
    console.log("Error", err.message);
    yield put(fetchFlavoursFailure(err.message));
  }
}

function* fetchSearchStart({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(
      fetchSearchRequest,
      payload.query,
      payload.type
    );
    yield put(fetchSearchSuccess(data.data));
  } catch (err) {
    console.log("Error", err.message);
    yield put(fetchSearchFailure(err.message));
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
    takeLatest(
      ProductsActionTypes.FETCH_SINGLE_FLAVOUR_START,
      fetchSingleFlavourStart
    ),
    takeLatest(ProductsActionTypes.FETCH_SEARCH_START, fetchSearchStart),
  ]);
}
