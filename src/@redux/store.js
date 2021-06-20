import React from "react";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { authReducer, formReducer, listReducer, menuReducer, mapReducer } from "./reducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    list: listReducer,
    menu: menuReducer,
    map: mapReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")

const initialState = {
    auth: { userInfo: userInfoFromStorage, error: [], loading: false },
};

const middleware = [ReduxThunk];

// const userInfo = localStorage.getItem('userInfo')
// const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null;

export const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Store;
