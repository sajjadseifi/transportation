import { reducerAction } from ".";
import { errorRequest } from "./all.action.types";

// fetch request
export const AUTH_START_REQUEST = "AUTH_START_REQUEST";
export const AUTH_FINISHED_REQUEST = "AUTH_FINISHED_REQUEST";
// login
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAIL = "AUTH_LOGIN_FAIL";
// register
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAIL = "AUTH_REGISTER_FAIL";
// forget password
export const AUTH_FORGETPASSWORD_SUCCESS = 'AUTH_FORGETPASSWORD_SUCCESS';
export const AUTH_FORGETPASSWORD_FAIL = "AUTH_FORGETPASSWORD_FAIL";

// logout
export const AUTH_LOGOUT = 'USER_LOGOUT';

export const startRequest = () => reducerAction(AUTH_START_REQUEST);
export const finishedRequest = () => reducerAction(AUTH_FINISHED_REQUEST);

export const loaginSuccess = (userInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    return reducerAction(AUTH_LOGIN_SUCCESS, userInfo);
};
export const authLoginFaild = (error) => errorRequest(AUTH_LOGIN_FAIL, error);

export const logoutAction = () => {
    localStorage.removeItem('userInfo');
    return reducerAction(AUTH_LOGOUT);
};

export default {
    //action
    AUTH_START_REQUEST,
    AUTH_FINISHED_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAIL,
    AUTH_FORGETPASSWORD_SUCCESS,
    AUTH_FORGETPASSWORD_FAIL,
    //action-handler
    startRequest,
    finishedRequest,
    loaginSuccess,
    logoutAction,
    authLoginFaild
};