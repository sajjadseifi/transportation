import { updateObject } from "../../core/utils";
import { listActionTypes } from "../@types";

const initialState = {
    loading: false,
    lists: {
        // "keyList":[list]
    },
    errors: null,
};

const successListRequest = (state, action) => {
    const { keyList, list: data, counts, pageNumber, pageSize } = action.payload;

    const page = +pageNumber;

    const maxPages = Math.ceil(+counts / +pageSize);
    console.log({ maxPages, page });
    const updatedSubList = updateObject(state.lists[keyList], { data, page, maxPages });

    const updatedList = updateObject(state.lists, { [keyList]: updatedSubList });

    return updateObject(state, { lists: updatedList });
};
const removeListWithKey = (state, action) => {
    const { keyList } = action.payload;

    const updatedKeys = Object.keys(state.lists).filter(kl => keyList == kl);

    let lists = {};

    updatedKeys.map((kl) => lists[kl] = state.lists[kl]);

    return updateObject(state, { lists });
};

const startRequestList = (state, action) => {
    const { keyList } = action.payload;


    let updatedList = state.lists[keyList] || {
        data: [],
        errors: null,
        maxPages: 0,
        page: 0,
    };

    updatedList = updateObject(updatedList, { loading: true });

    const updatedLists = updateObject(state.lists, { [keyList]: updatedList });

    return updateObject(state, { lists: updatedLists });

};
const finishedRequestList = (state, action) => {
    const { keyList } = action.payload;

    if (!state.lists[keyList])
        return state;

    const updatedSubList = updateObject(state.lists[keyList], { loading: false });

    const updatedLists = updateObject(state.lists, { [keyList]: updatedSubList });

    return updateObject(state, { lists: updatedLists });

};

const deleteItemListById = (state, action) => {
    // keyList,itemId
    const { keyList, itemId } = action.payload;
    console.log({keyList, itemId});

    let updatedList = state.lists[keyList];
    let updatedData = [...updatedList.data].filter(d => d.id !== itemId);

    updatedList = updateObject(updatedList, { data: updatedData });

    const updatedLists = updateObject(state.lists, { [keyList]: updatedList });

    return updateObject(state, { lists: updatedLists });
};
export const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case listActionTypes.LIST_START_REQUEST:
            return startRequestList(state, action);
        case listActionTypes.LIST_FINISHED_REQUEST:
            return finishedRequestList(state, action);
        case listActionTypes.LIST_SET_ERRORS:
            return { errors: action.payload };
        case listActionTypes.LIST_CLEAR_ERRORS:
            return { errors: initialState.errors };
        case listActionTypes.LIST_INITIAL_STATE:
            return initialState;
        //more than action type....
        case listActionTypes.LIST_SUCCES_REQUEST:
            return successListRequest(state, action);
        case listActionTypes.LIST_REMOVE_WITH_KEY:
            return removeListWithKey(state, action);
        case listActionTypes.LIST_DELETE_ITEM_BYID:
            return deleteItemListById(state, action);
    }
    return state;
};

export default listReducer;



