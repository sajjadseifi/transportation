import { updateObject } from "../../core/utils";
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
    console.log({action});
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
            return setFormValue(state, action);
        case formActionTypes.FORM_REMOVE_VALUES:
            return removeFormValue(state, action);

    }
    return state;
};

export default formReducer;

const setFormValue = (state, action) => {
    const { keyForm, form } = action.payload;

    const updateState = {
        forms: {
            ...state.forms,
            [keyForm]: form
        }
    }

    return updateObject(state, updateState);
};
const removeFormValue = (state, action) => {
    const { keyForm } = action.payload;

    const forms = { ...state.forms };

    if (forms[keyForm])
        delete forms[keyForm];

    return updateObject(state, { forms });
};



