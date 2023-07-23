import axios from "axios";

import {
    GET_VOLUNTEER_SUCCESS,
    VOLUNTEER_ERROR,
    VOLUNTEER_REQUEST,
} from "./actionTypes";

export const getVolunteer = (obj) => (dispatch) => {
    dispatch({ type: VOLUNTEER_REQUEST });
    axios
        .get("https://justserve.onrender.com/volunteer/get", obj)
        .then((res) => {
            dispatch({ type: GET_VOLUNTEER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: VOLUNTEER_ERROR });
        });
};
