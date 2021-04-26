import { updateObject } from "../../core/utils";

export const startRequest = (state, action) => {
    return updateObject(state, { loading: true, errors: null });
};

export const finishedRequest = (state, action) => {
    return updateObject(state, { loading: false });
};
export const startDeleteRequest = (state, action) => {
    return updateObject(state, { deleteLoaing: true, });
};

export const finishedDeleteRequest = (state, action) => {
    return updateObject(state, { deleteLoaing: false });
};