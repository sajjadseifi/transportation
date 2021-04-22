//fetch request
export const AUTH_START_REQUEST = "AUTH_START_REQUEST";
export const AUTH_FINISHED_REQUEST = "AUTH_FINISHED_REQUEST";
//login
export const AUTH_LOGIN_SUCCESS = "AUTH_SUCCESS_REQUEST";
export const AUTH_LOGIN_FAIL = "AUTH_FAILD_REQUEST";
//register
export const AUTH_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAIL = "AUTH_FAILD_REQUEST";
//autoLogin
export const AUTH_LOGOUT = 'USER_LOGOUT';

export const startRequest = () => {
    return {
        type: AUTH_START_REQUEST,
    }
};
export const finishedRequest = () => {
    return {
        type: AUTH_FINISHED_REQUEST,
    }
};
export const loaginSuccess = (userInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: userInfo,
    };
};
export const logoutAction= () => {
    localStorage.removeItem('userInfo');
    return {type: AUTH_LOGOUT};
};

export {
    startRequest,
    finishedRequest,
    loaginSuccess
};