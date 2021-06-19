import { menuActionTypes } from "../@types";
import { updateObject } from "../../core/utils";
const initialState = {
    activeSidebar: true,
};

export const defaultReducer = (state = initialState, action) => {

    switch (action.type) {
        case menuActionTypes.ACTIVE_SIDEBAR:
            return updateObject(state, { activeSidebar: true });
        case menuActionTypes.DEACTIVE_SIDEBAR:
            return updateObject(state, { activeSidebar: false });
    }
    return state;
};

export default defaultReducer;