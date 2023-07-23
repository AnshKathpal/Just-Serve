import axios from "axios"


import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const userDetails = (loginData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    axios.post(`https://justserve.onrender.com/login`, loginData).then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.role })
        console.log(res.data);
    })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE })

        })
}

