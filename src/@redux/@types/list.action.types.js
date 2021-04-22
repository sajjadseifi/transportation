import { reducerAction } from ".";
import { errorRequest } from ".";

// fetch request
export const LIST_START_REQUEST = "LIST_START_REQUEST";
export const LIST_FINISHED_REQUEST = "LIST_FINISHED_REQUEST";
// List 
export const LIST_SUCCES_REQUEST = 'LIST_SUCCES_REQUEST';
export const LIST_FAILD_REQUEST = 'LIST_FAILD_REQUEST';


export const startRequest = () => reducerAction(LIST_START_REQUEST);
export const finishedRequest = () => reducerAction(LIST_FINISHED_REQUEST);

export const loadListSuccess = (list) => reducerAction(LIST_SUCCES_REQUEST, list);

export const loadListFaild = (error) => errorRequest(LIST_FAILD_REQUEST, error);

export default {
    //action
    LIST_START_REQUEST,
    LIST_FINISHED_REQUEST,
    LIST_SUCCES_REQUEST,
    LIST_FAILD_REQUEST,
    //action-handler
    startRequest,
    finishedRequest,
    loadListSuccess,
    loadListFaild
};