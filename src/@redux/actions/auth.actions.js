import {history } from "../..";
import { authActionTypes, errorRequest,USER_LOGIN_FAIL } from '../@types';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch(authActionTypes.startRequest());

        var formdata = new FormData();
        formdata.append('user_name', username);
        formdata.append('password', password);
        formdata.append('device_information', '{}');

        // const response = await fetch(
        //   'http://club.negarestoun.ir/authService/login',
        //   {
        //     method: 'POST',
        //     body: formdata,
        //     headers: {
        //       Authorization:
        //         'Basic ' + new Buffer('shid' + ':' + 'test').toString('base64'),
        //     },
        //     redirect: 'follow',
        //   }
        // );
        const data = await response.json();

        if (data.succsess)
            dispatch(authActionTypes.loaginSuccess(data.data));
        else
            throw data.message;
    } catch (error) {
        dispatch(errorRequest(USER_LOGIN_FAIL,error));
    } finally {
        dispatch(authActionTypes.finishedRequest());
    }
};

export const logout = () => (dispatch) => {
    dispatch(authActionTypes.logoutAction());
    history.push("auth/login");
};