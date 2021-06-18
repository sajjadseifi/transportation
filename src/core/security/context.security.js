import * as React from 'react'
const SecurityStateContext = React.createContext();

const actionTypes = {
    INITIAL_STATE: "INITIAL_STATE",
    UPDATE_STATE: "UPDATE_STATE",
    CLEAR_STATE: "CLEAR_STATE",
    SET_OPTIONS: "SET_OPTIONS",
    SET_USER: "SET_USER",
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
        case actionTypes.SET_USER:
            return { ...state, user: action.payload };
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
    options: {
        // "user": {
        //     roleLevel: 0,by default role level is zero
        //     levelInRole: 5,by default levelin role is zero
        // },
    }

};
const opt1 = {
    "user": {
        roleLevel: 0,
        levelInRole: 5
    },
    "transport": {
        roleLevel: 1,
        levelInRole: 3
    },
    "admin": {
        roleLevel: 2,
        levelInRole: 4
    },
}
const opt2 = {
    "user": 0,
    "transport": 1,
    "admin": 2
}


function SecurityProvider({ user, levelRole = 0, userRole = null, options = {}, children } = initialState) {
    let opt = { ...options };
    Object.keys(options).forEach((roleKey, i) => {
        if (typeof options[roleKey] !== "number") {
            opt[roleKey] = options[roleKey];
            return;
        }

        opt[roleKey] = {
            roleLevel: opt[roleKey],
            levelInRole: 0
        };
    });

    const [state, dispatch] = React.useReducer(SecurityReducer, {
        user,
        userRole,
        levelRole,
        options: opt
    });

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