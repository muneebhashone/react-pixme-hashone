import { takeLatest, takeEvery } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { signInStart } from "../user/user.saga";

export function* watcherSaga() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInStart);
}
