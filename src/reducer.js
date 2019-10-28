import { ADD_INFO, SEND_INFO } from './actions'
function reducer (state = {info: [], change : {}}, action){
    switch(action.type){
        case ADD_INFO:
            return {
                ...state,
                info: action.payload
            }
        case SEND_INFO:
            return {
                ...state,
                change: action.payload
            }
    default:
        return state;
    }
}

export default reducer