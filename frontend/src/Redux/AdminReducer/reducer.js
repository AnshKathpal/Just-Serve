import {
    EDIT_VOLUNTEER,
    GET_VOLUNTEER_SUCCESS,
    POST_VOLUNTEER_SUCCESS,
    VOLUNTEER_ERROR,
    VOLUNTEER_REQUEST,
  } from "./actionTypes";


  const initialState = {
    volunteers: [],
    isLoading: false,
    isError: false,
  };


  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case VOLUNTEER_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case POST_VOLUNTEER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          volunteers: [...state.volunteers, payload],
        };
      }
      case VOLUNTEER_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case GET_VOLUNTEER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          volunteers: payload,
        };
      }
      case EDIT_VOLUNTEER : {
        return {
          ...state,
          isLoading : false,
        }
      }
      default: {
        return state;
      }
    }
  };