//added in snippet
import { reducerAction } from ".";
import { errorRequest } from ".";

// fetch request
export const DEFAULT_START_REQUEST = "DEFAULT_START_REQUEST";
export const DEFAULT_FINISHED_REQUEST = "DEFAULT_FINISHED_REQUEST";

//error
export const DEFAULT_SET_ERRORS = 'DEFAULT_SET_ERRORS';
export const DEFAULT_CLEAR_ERRORS = 'DEFAULT_CLEAR_ERRORS';

export const startRequest = () => reducerAction(DEFAULT_START_REQUEST);
export const finishedRequest = () => reducerAction(DEFAULT_FINISHED_REQUEST);

export const setErrors = (error) => errorRequest(DEFAULT_SET_ERRORS, error);

export const  clearErrors = () => reducerAction(DEFAULT_CLEAR_ERRORS);

export default {
    //action
    DEFAULT_START_REQUEST,
    DEFAULT_FINISHED_REQUEST,
    DEFAULT_SET_ERRORS,
    DEFAULT_CLEAR_ERRORS,
    //action-handler
    startRequest,
    finishedRequest,
    setErrors,
    clearErrors
};