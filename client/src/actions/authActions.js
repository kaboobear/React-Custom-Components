import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS} from '../actions/types';
import {returnErrors} from './errorActions'
import axios from 'axios';



export const loadUser = () => (dispatch, getState) => {
    dispatch({type:USER_LOADING});

    axios.get('/user/info')
        .then(res => {
            dispatch({type:USER_LOADED,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,AUTH_ERROR))
            dispatch({type:AUTH_ERROR})
        })
}

export const register = (regData) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(regData)
    axios.post('/user/register',body,config)
        .then(res => dispatch({type:REGISTER_SUCCESS,payload:res.data}))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,REGISTER_FAIL))
            dispatch({type:REGISTER_FAIL})
        })
}

export const login = (loginData) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(loginData)
    axios.post('/user/login',body,config)
        .then(res => {
            dispatch({type:LOGIN_SUCCESS,payload:res.data})
        })
        .catch(err => {
            if(err.response.status === 401) dispatch(returnErrors({pass: "Wrong password"},err.response.status,LOGIN_FAIL))
            else dispatch(returnErrors(err.response.data,err.response.status,LOGIN_FAIL))
            dispatch({type:LOGIN_FAIL})
        })
}

export const logout = () => dispatch =>{
    axios.get('/user/logout').then(()=>{
        dispatch({type:LOGOUT_SUCCESS})
    })
}
