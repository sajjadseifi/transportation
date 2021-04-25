import { history } from "../..";
import { authApi } from "../../core/api";
import { authLogin } from "../../models";
import { authActionTypes, errorRequest } from '../@types';

export const login = (username, password) => async (dispatch) => {
    //start for loading request
    dispatch(authActionTypes.startRequest());
    
    //header config to sended request in authorization 
    const options = {
        headers: {
            Authorization: 'Basic ' + new Buffer('shid' + ':' + 'test').toString('base64')
        },
        redirect: 'follow',
    };

    //get form data in model user
    const formData = authLogin(username, password).FormData;

    try {
        //auth request
        const response = await authApi.login(formData, options);

        //status=1 is success req 
        if (response.status === 1)
            //login succes and set user infor
            dispatch(authActionTypes.loaginSuccess(response.data));
        else
            //throw error and handeling in catch
            throw data.message;
    } catch (error) {
        //set errors with type action
        dispatch(authActionTypes.authLoginFaild(error));
    } finally {
        //finised request and run after try or catch --end part
        dispatch(authActionTypes.finishedRequest());
    }
};

export const logout = () => (dispatch) => {
    //logout
    dispatch(authActionTypes.logoutAction());
    //go to login page after logout
    history.push("auth/login");
};
