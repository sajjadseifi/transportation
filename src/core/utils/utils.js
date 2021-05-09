import queryString from "query-string";

export const updateObject = (orginal, target) => {
    return {
        ...orginal,
        ...target
    };
};

export const updateRouteState = (history, state) => {

    const search = "?" + queryString.stringify(state);
    history.push({
        pathname: history.location.pathname,
        search,
        state,
    });
};
export const selectOptsGenerator = (valueObj, labelObj) => {
    return Object.keys(valueObj).map((dk) => ({
        value: valueObj[dk],
        label: labelObj[dk]
    }));
};