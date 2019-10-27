export const ADD_INFO = 'ADD_INFO'
export const REQUEST_INFO = 'REQUEST_INFO'
export const RECIEVE_INFO = 'RECIEVE_INFO'
export const SEND_INFO = 'SEND_INFO'

export const addinfoAction = (info) => ({
    type: ADD_INFO,
    payload: info
})


export const setInfo = () => ({
    type: REQUEST_INFO
})


export const sendinfoAction = (info) => ({
    type: SEND_INFO,
    payload: info
})