import { listActionType } from "../@types";

const initialState = {
    loading: false,
    errors: null,
};

export const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case listActionType.LIST_START_REQUEST:
            return { loading: true, errors: initialState.errors };
        case listActionType.LIST_FINISHED_REQUEST:
            return { loading: false };
        case listActionType.LIST_SET_RROR:
            return { errors: action.payload };
        case listActionType.LIST_CLEAR_RROR:
            return { errors: initialState.errors };
        case listActionType.LIST_INITIAL_STATE:
            return initialState;

        //more than action type....     
    }
    return state;
};

export default listReducer;