import { GET_USERS_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, PATCH_USERS_ROLE_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError: false,
    isAuth : false,
    fullName : ""
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state, isLoading: false, isError: false, isAuth : true
            }
        }
        default: {
            return state
        }
    }
}