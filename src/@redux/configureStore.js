import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function configureStore(reducers, initialState) {
    const middleware = [
        thunk,
        // routerMiddleware(history)
    ];

    // const rootReducer = combineReducers({
    //     ...reducers,
    //     // router: connectRouter(history)
    // });

    const enhancers = [];
    // const windowIfDefined = typeof window === 'undefined' ? null : window; // eslint-disable-line @typescript-eslint/no-explicit-any

    // if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    //     enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    // }

    return createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

}
