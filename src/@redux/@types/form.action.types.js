import { reducerAction } from ".";
import { errorRequest } from ".";

// fetch request
export const FORM_START_REQUEST = "FORM_START_REQUEST";
export const FORM_FINISHED_REQUEST = "FORM_FINISHED_REQUEST";
export const FORM_SUCCESS_REQUEST = "FORM_SUCCESS_REQUEST";

//error
export const FORM_SET_ERRORS = 'FORM_SET_ERRORS';
export const FORM_CLEAR_ERRORS = 'FORM_CLEAR_ERRORS';

export const startRequest = () => reducerAction(FORM_START_REQUEST);
export const finishedRequest = () => reducerAction(FORM_FINISHED_REQUEST);
export const successRequest = () => reducerAction(FORM_SUCCESS_REQUEST);

export const setErrors = (error) => errorRequest(FORM_SET_ERRORS, error);
export const clearErrors = () => reducerAction(FORM_CLEAR_ERRORS);

export default {
    //action
    FORM_START_REQUEST,
    FORM_FINISHED_REQUEST,
    FORM_SET_ERRORS,
    FORM_CLEAR_ERRORS,
    FORM_SUCCESS_REQUEST,
    //action-handler
    startRequest,
    finishedRequest,
    successRequest,
    setErrors,
    clearErrors
};