import axios from "axios";
import {
  EDIT_VOLUNTEER,
  GET_VOLUNTEER_SUCCESS,
  POST_VOLUNTEER_SUCCESS,
  VOLUNTEER_ERROR,
  VOLUNTEER_REQUEST,
} from "./actionTypes";

export const postVolunteers = (newVolunteer) => (dispatch) => {
  dispatch({ type: VOLUNTEER_REQUEST });
  axios
    .post("https://justserve.onrender.com/volunteer/add", newVolunteer)
    .then((res) => {
      dispatch({ type: POST_VOLUNTEER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: VOLUNTEER_ERROR });
    });
};

export const getVolunteer = (dispatch) => {
  dispatch({ type: VOLUNTEER_REQUEST });
  axios
    .get("https://justserve.onrender.com/volunteer/get")
    .then((res) => {
      dispatch({ type: GET_VOLUNTEER_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: VOLUNTEER_ERROR });
    });
};

export const editVolunteers = (id,data) => (dispatch) => {
  dispatch ({type : VOLUNTEER_REQUEST})
  axios.patch(`https://justserve.onrender.com/volunteer/update/${id}`, data)
  .then((res)=> {
    dispatch({type : EDIT_VOLUNTEER})
  })
  .catch((err)=>{
    dispatch({type : VOLUNTEER_ERROR})
  })
}
