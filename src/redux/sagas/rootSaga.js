import { CREATE_USER_START, GET_USERS_START, TAKE_START } from "../actionTypes";
import { take, takeEvery, takeLatest } from "redux-saga/effects";
import { getUsersHandler } from "./handlers/getUsers";
import { createUserHandler } from "./handlers/createUser";

export function* watcherSaga() {
  yield take(TAKE_START)
  yield takeEvery(GET_USERS_START, getUsersHandler);
  yield takeLatest(CREATE_USER_START, createUserHandler);
}
