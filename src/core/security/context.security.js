import * as React from 'react'
const SecurityStateContext = React.createContext();

const actionTypes = {
    INITIAL_STATE: "INITIAL_STATE",
    UPDATE_STATE: "UPDATE_STATE",
    CLEAR_STATE: "CLEAR_STATE",
    SET_OPTIONS: "SET_OPTIONS",
};

function SecurityReducer(state, action) {

    switch (action.type) {
        case actionTypes.INITIAL_STATE:
            const { userRole, levelRole } = action;
            return { userRole, levelRole };
        case actionTypes.UPDATE_STATE:
            return { ...state, ...action };
        case actionTypes.CLEAR_STATE:
            return { userRole: null, levelRole: 0 };
        case actionTypes.SET_OPTIONS:
            return { options: action.payload };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

}
const initialState = {
    userRole: null,
    levelRole: 0,
    children: null,
    user: {
        role: null,
        level: 0,
    },
    options: [
        // {role:"",level:0}        
    ]
};

function SecurityProvider({ user, levelRole = 0, userRole = null, options = [], children } = initialState) {
    const [state, dispatch] = React.useReducer(SecurityReducer, { user, userRole, options, levelRole });

    const value = { state, dispatch };

    return (
        <SecurityStateContext.Provider value={value}>
            {children}
        </SecurityStateContext.Provider>
    );
}
function useSecurity() {
    const context = React.useContext(SecurityStateContext)
    if (context === undefined) {
        throw new Error('useSecurity must be used within a SecurityProvider');
    }
    return context;
}
export { SecurityProvider, useSecurity };