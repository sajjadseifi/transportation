import { listActionTypes } from "../@types";

const initialState = {
    loading: false,
    errors: null,
};

export const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case listActionTypes.LIST_START_REQUEST:
            return { loading: true, errors: initialState.errors };
        case listActionTypes.LIST_FINISHED_REQUEST:
            return { loading: false };
        case listActionTypes.LIST_SET_RROR:
            return { errors: action.payload };
        case listActionTypes.LIST_CLEAR_RROR:
            return { errors: initialState.errors };
        case listActionTypes.LIST_INITIAL_STATE:
            return initialState;

        //more than action type....     
    }
    return state;
};

export default listReducer;