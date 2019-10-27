import { take, takeEvery} from 'redux-saga/effects'
import {ADD_INFO} from '../actions'

function* handleLoad(action){
    
}

export default function* infoSaga() {
    yield takeEvery(ADD_INFO, handleLoad);
}