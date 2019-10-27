import { ADD_INFO, SEND_INFO } from './actions'
function reducer (state = {info : []}, action){
    switch(action.type){
        case ADD_INFO:
            return {
                ...state,
                info: [...state.info, action.payload]
            }
        case SEND_INFO:
            return {
                ...state
            }
    default:
        return state;
    }
}

export default reducer