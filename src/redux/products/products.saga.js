import axios from "axios";
import { fetchDrinksSuccess, fetchDrinksFailure } from "./products.action";
import { ProductsActionTypes } from "./products.types";
import { put, call, takeLatest } from "redux-saga/effects";

function fetchDrinksRequest(pageNumber, startingPoint) {
  return axios.get(
    `https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/getAllWinesWeb?page=${pageNumber}&starting_point=${startingPoint}`
  );
}

function* fetchDrinksStart({ payload: { pageNumber, startingPoint } }) {
  try {
    const { data } = yield call(fetchDrinksRequest, pageNumber, startingPoint);
    yield put(fetchDrinksSuccess(data));
  } catch (err) {
    console.log("Error", err.message);
  }
}

export function* productsSaga() {
  yield takeLatest(ProductsActionTypes.FETCH_DRINKS_START, fetchDrinksStart);
}
