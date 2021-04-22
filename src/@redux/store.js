import React from "react";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

export const rootReducerPanel = combineReducers({});

export const store = createStore(rootReducerPanel, applyMiddleware(ReduxThunk));

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Store;
