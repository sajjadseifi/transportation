import { reducerAction } from ".";
import { errorRequest } from ".";

// fetch request
export const LIST_START_REQUEST = "LIST_START_REQUEST";
export const LIST_FINISHED_REQUEST = "LIST_FINISHED_REQUEST";
// List 
export const LIST_SUCCES_REQUEST = 'LIST_SUCCES_REQUEST';
export const LIST_REMOVE_WITH_KEY = 'LIST_REMOVE_WITH_KEY';
export const LIST_FAILD_REQUEST = 'LIST_FAILD_REQUEST';
export const LIST_SET_ERRORS = "LIST_SET_ERRORS";
export const LIST_CLEAR_ERRORS = "LIST_CLEAR_ERRORS";
export const LIST_INITIAL_STATE = "LIST_INITIAL_STATE";

export const startRequest = (keyList) => reducerAction(LIST_START_REQUEST, { keyList });
export const finishedRequest = (keyList) => reducerAction(LIST_FINISHED_REQUEST, { keyList });

export const loadListSuccess = ({ keyList, list, counts, pageNumber, pageSize
}) => reducerAction(LIST_SUCCES_REQUEST, { keyList, list, counts, pageNumber, pageSize });
export const removeListWithKey = (keyList) => reducerAction(LIST_REMOVE_WITH_KEY, { keyList });
export const loadListFaild = (error) => errorRequest(LIST_FAILD_REQUEST, error);


export default {
    //action
    LIST_START_REQUEST,
    LIST_FINISHED_REQUEST,
    LIST_SUCCES_REQUEST,
    LIST_FAILD_REQUEST,
    LIST_SET_ERRORS,
    LIST_CLEAR_ERRORS,
    LIST_INITIAL_STATE,
    LIST_REMOVE_WITH_KEY,
    //action-handler
    startRequest,
    finishedRequest,
    loadListSuccess,
    loadListFaild,
    removeListWithKey
};