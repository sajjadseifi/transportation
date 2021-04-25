import { formActionType } from "../@types";

const initialState = {
    loading: false,
    form: {
        //key:{form object}
    },
    errors: null,
};

export const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case formActionType.FORM_START_REQUEST:
            return { loading: true, errors: initialState.errors };
        case formActionType.FORM_FINISHED_REQUEST:
            return { loading: false };
        case formActionType.FORM_SET_RROR:
            return { errors: action.payload };
        case formActionType.FORM_CLEAR_RROR:
            return { errors: null };
        case formActionType.FORM_INITIAL_STATE:
            return initialState;
        //more than action type....     
    }
    return state;
};

export default formReducer;