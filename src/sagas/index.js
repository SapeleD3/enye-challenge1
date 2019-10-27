import { all, fork } from "redux-saga/effects";
import * as infoSaga from "./infoSaga";
import * as sendInfoSaga from './sendInfoSaga'

export default function* saga() {
    yield all(
        [...Object.values(infoSaga), ...Object.values(sendInfoSaga)].map(fork)
      );
}