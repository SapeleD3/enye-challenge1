import { call, put, takeEvery, select} from 'redux-saga/effects'
import {SEND_INFO,  setInfo} from '../actions'
import apiCall from '../apiCall'

const getInfo = (state) => state.change

function* postInfo(action){
    try {
      const info = yield select(getInfo)
      const data = yield call (apiCall, info)
      yield put(setInfo(data))
      console.log('here', info)  
    } catch (e) {
        console.log(e)
    }
}

export default function* infoSaga() {
    yield takeEvery(SEND_INFO, postInfo);
}