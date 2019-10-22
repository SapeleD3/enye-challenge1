import {SET_INFO} from '../types'

export const addUser = (newInfo) => (dispatch) => {
    dispatch({
        type: SET_INFO,
        payload: newInfo
    })

}