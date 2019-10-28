import { fork, put, take} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { addinfoAction, } from '../actions'
import {db} from '../common/Firebase/firebase'


function* startListener() {
       const chan = new eventChannel(emit => {
        const listener = db.collection('info')
        listener.onSnapshot(querySnapshot => {
            const infos = []
            querySnapshot.forEach(doc => {
                infos.push(doc.data())
            })
            emit({ data: infos || {} });
        })

        return () => {
            listener.off();
          };
    })

    while(true) {
        const { data } = yield take(chan);
        yield put(addinfoAction(data));
    }
}

export default function* getInfoSaga(){
    yield fork(startListener)
}