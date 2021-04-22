import { defaultActionType } from "../@types";

const initialState = {
    loading: false,
    errors: null,
};

export const defaultReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case defaultActionType.DEFAULT_START_REQUEST:
            return { loading: true, errors: initialState.errors };
        case defaultActionType.DEFAULT_FINISHED_REQUEST:
            return { loading: false };
        case defaultActionType.DEFAULT_SET_RROR:
            return { errors: action.payload };
        case defaultActionType.DEFAULT_CLEAR_RROR:
            return { errors: initialState.errors };
        case defaultActionType.DEFAULT_INITIAL_STATE:
            return initialState;

        //more than action type....     
    }
    return state;
};

export default defaultReducer;