import { createStore } from 'redux'
import uuid from 'uuid/v4'

const initialState = {
    info : [
        {
            id: uuid(),
            firstName: 'Moses',
            lastName: 'Sapele',
            birthday: '22 june 1998',
            age: '22',
            hobby : 'watching Anime'
        }
    ]
};

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer (state, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                info: [...state.info, action.payload]
            }
    default:
        return state;
    }
}

export const addinfoAction = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
})