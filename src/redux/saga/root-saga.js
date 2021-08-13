import { all, call } from "redux-saga/effects";
import { userSaga } from "../user/user.saga";
import { productsSaga } from "../products/products.saga";

export function* watcherSaga() {
  yield all([call(userSaga), call(productsSaga)]);
}
