
const initialState = {
    loading: false,
    userInfo: null,
    error: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START_REQUEST:
            return { loading: true, error: null };
        case AUTH_FINISHED_REQUEST:
            return { loading: false };
        case AUTH_LOGIN_SUCCESS:
            return { userInfo: action.payload };
        case AUTH_REGISTER_FAIL | AUTH_LOGIN_FAIL | AUTH_FORGETPASSWORD_FAIL:
            return { error: action.payload };
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
};


export default authReducer;