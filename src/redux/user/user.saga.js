import axios from "axios";
import { signInSuccess, signInFailure } from "./user.action";
import { put, call } from "redux-saga/effects";

function loginRequest(email, password) {
  return axios.post(
    "https://dev.1stopwebsitesolution.com/demo/shake_server/public/api/login",
    {
      email: email,
      password: password,
    }
  );
}

export function* signInStart({ payload: { email, password } }) {
  try {
    const {
      data: { data },
    } = yield call(loginRequest, email, password);
    yield put(signInSuccess(data));
  } catch (err) {
    console.log("error", err.message);
    yield put(signInFailure(String(err.message)));
  }
}
