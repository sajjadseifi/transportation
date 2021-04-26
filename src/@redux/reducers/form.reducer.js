import { formActionTypes } from "../@types";
import { finishedDeleteRequest, finishedRequest, startDeleteRequest, startRequest } from "./all.redcuer";

const initialState = {
    loading: false,
    deleteLoaing: false,
    forms: {
        //key:{form object}
    },
    errors: null,
};

export const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case formActionTypes.FORM_START_REQUEST:
            return startRequest(state);
        case formActionTypes.FORM_FINISHED_REQUEST:
            return finishedRequest(state);
        case formActionTypes.FORM_DELETE_START_REQUEST:
            return startDeleteRequest(state);
        case formActionTypes.FORM_DELETE_FINISHED_REQUEST:
            return finishedDeleteRequest(state);
        case formActionTypes.FORM_SET_ERRORS:
            return { errors: action.payload };
        case formActionTypes.FORM_CLEAR_ERRORS:
            return { errors: null };
        case formActionTypes.FORM_INITIAL_STATE:
            return initialState;
        //more than action type....     
        case formActionTypes.FORM_SET_VALUES:
            return {};
    }
    return state;
};

export default formReducer;






