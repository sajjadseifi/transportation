import { history } from "../..";
import { authApi } from "../../core/api";
import { authActionTypes, errorRequest } from '../@types';
const userFormData = (username, password) => {
    var formdata = new FormData();
    formdata.append('user_name', username);
    formdata.append('password', password);
    formdata.append('device_information', '{}');

};
export const login = (username, password) => async (dispatch) => {
    try {
        dispatch(authActionTypes.startRequest());
         
        const options = {
            headers: {
                Authorization:'Basic ' + new Buffer('shid' + ':' + 'test').toString('base64')
            },
            redirect: 'follow',
        };
        const formData = userFormData(username, password);

        const response = authApi.login(formData, options);

        if (response.status === 1)
            dispatch(authActionTypes.loaginSuccess(data.data));
        else
            throw data.message;

    } catch (error) {
        dispatch(errorRequest(authActionTypes.USER_LOGIN_FAIL, error));
    } finally {
        dispatch(authActionTypes.finishedRequest());
    }
};

export const logout = () => (dispatch) => {
    dispatch(authActionTypes.logoutAction());
    history.push("auth/login");
};