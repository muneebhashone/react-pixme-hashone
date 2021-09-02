import axios from "axios";
import { UserActionTypes } from "../user/user.types";
import { signInSuccess, signInFailure } from "./user.action";
import { put, call, takeLatest, all } from "redux-saga/effects";

// Requests
function loginRequest(email, password) {
  return axios.post(
    "https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/login",
    {
      email: email,
      password: password,
    }
  );
}

function userEditRequest(data) {
  return axios.post(
    "https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/login",
    {
      image: data.image,
      user_id: data.userId,
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      country: data.country,
    }
  );
}

// Utils
function setUserLocal(userObj) {
  if (localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", JSON.stringify(userObj));
  } else {
    localStorage.setItem("currentUser", JSON.stringify(userObj));
  }
}

// Sagas
function* signInStart({ payload: { email, password } }) {
  try {
    const {
      data: { data },
    } = yield call(loginRequest, email, password);
    yield put(signInSuccess(data));
    yield call(setUserLocal, data);
  } catch (err) {
    yield put(signInFailure(String(err.message)));
  }
}

function* clearUserLocal() {
  yield localStorage.removeItem("currentUser");
}

// Root Saga
export function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.SIGN_IN_START, signInStart),
    takeLatest(UserActionTypes.CLEAR_CURRENT_USER, clearUserLocal),
  ]);
}
