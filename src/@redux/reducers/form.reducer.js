import { formActionTypes } from "../@types";

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
            return { loading: true, errors: initialState.errors };
        case formActionTypes.FORM_FINISHED_REQUEST:
            return { loading: false };
        case formActionTypes.FORM_DELETE_START_REQUEST:
            return { deleteLoaing: true };
        case formActionTypes.FORM_DELETE_FINISHED_REQUEST:
            return { deleteLoaing: false };
        case formActionTypes.FORM_SET_ERRORS:
            return { errors: action.payload };
        case formActionTypes.FORM_CLEAR_ERRORS:
            return { errors: null };
        case formActionTypes.FORM_INITIAL_STATE:
            return initialState;
        //more than action type....     
    }
    return state;
};

export default formReducer;