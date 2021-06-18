import { authActionTypes } from "../@types";

const initialState = {
    loading: false,
    userInfo: null,//{token:"",username:"",firstname:"",lastname:"",role:""}
    error: [],
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.AUTH_START_REQUEST:
            return { loading: true, error: null };
        case authActionTypes.AUTH_FINISHED_REQUEST:
            return { loading: false };
        case authActionTypes.AUTH_LOGIN_SUCCESS:
            return { userInfo: action.payload };
        case authActionTypes.AUTH_REGISTER_FAIL | authActionTypes.AUTH_LOGIN_FAIL | authActionTypes.AUTH_FORGETPASSWORD_FAIL:
            return { error: action.payload };
        case authActionTypes.USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
};


export default authReducer;