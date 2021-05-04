import { menuActionTypes } from "../@types";

export const menuActivity = (isOpen) => async dispatch => {

    if (isOpen)
        dispatch(menuActionTypes.activeSidebar())
    else
        dispatch(menuActionTypes.deActiveSidebar())

}