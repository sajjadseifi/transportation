import React from "react";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { authReducer } from "./reducers";

export const rootReducerPanel = combineReducers({
    auth: authReducer
});
const middleware = [ReduxThunk];

const userInfo = localStorage.getItem('userInfo')
const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    lotteriesList: { lotteries: [] },
};

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Store;
