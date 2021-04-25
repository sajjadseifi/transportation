import { reducerAction } from ".";
import { errorRequest } from ".";

// fetch request
export const FORM_START_REQUEST = "FORM_START_REQUEST";
export const FORM_FINISHED_REQUEST = "FORM_FINISHED_REQUEST";
export const FORM_SUCCESS_REQUEST = "FORM_SUCCESS_REQUEST";

//
export const FORM_DELETE_START_REQUEST = "FORM_DELETE_START_REQUEST";
export const FORM_DELETE_FINISHED_REQUEST = "FORM_DELETE_FINISHED_REQUEST";

//error
export const FORM_SET_ERRORS = 'FORM_SET_ERRORS';
export const FORM_CLEAR_ERRORS = 'FORM_CLEAR_ERRORS';
//inital state or reset
export const FORM_INITIAL_STATE = "FORM_INITIAL_STATE";
export const FORM_SET_VALUES = "FORM_SET_VALUES";
export const FORM_REMOVE_VALUES = "FORM_REMOVE_VALUES";
// dispatch(formActionTypes.setForm(keyForm,resposne));
// dispatch(formActionTypes.removeForm(keyForm));


export const startRequest = () => reducerAction(FORM_START_REQUEST);
export const finishedRequest = () => reducerAction(FORM_FINISHED_REQUEST);
export const startDeleteRequest = () => reducerAction(FORM_DELETE_START_REQUEST);
export const finishedDeleteRequest = () => reducerAction(FORM_DELETE_FINISHED_REQUEST);
export const successRequest = () => reducerAction(FORM_SUCCESS_REQUEST);

export const setErrors = (error) => errorRequest(FORM_SET_ERRORS, error);
export const clearErrors = () => reducerAction(FORM_CLEAR_ERRORS);
export const initialState = () => reducerAction(FORM_INITIAL_STATE);
export const setForm = (keyForm, form) => reducerAction(FORM_SET_VALUES, { keyForm, form });
export const removeForm = (keyForm) => reducerAction(FORM_REMOVE_VALUES, { keyForm });


export default {
    //action
    FORM_DELETE_START_REQUEST,
    FORM_DELETE_FINISHED_REQUEST,
    FORM_START_REQUEST,
    FORM_FINISHED_REQUEST,
    FORM_SET_ERRORS,
    FORM_CLEAR_ERRORS,
    FORM_SUCCESS_REQUEST,
    FORM_INITIAL_STATE,
    FORM_SET_VALUES,
    FORM_REMOVE_VALUES,
    //action-handler
    startRequest,
    startDeleteRequest,
    finishedDeleteRequest,
    finishedRequest,
    successRequest,
    setErrors,
    clearErrors,
    removeForm,
    setForm,
};