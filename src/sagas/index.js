import { all, fork } from "redux-saga/effects";
import * as infoSaga from "./infoSaga";
import * as getInfoSaga from './getInfoSaga'

export default function* saga() {
    yield all(
        [...Object.values(infoSaga), ...Object.values(getInfoSaga)].map(fork)
      );
}