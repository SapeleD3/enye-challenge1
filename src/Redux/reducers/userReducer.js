import {SET_INFO} from '../types'

const initialState = {
    info: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_INFO:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}