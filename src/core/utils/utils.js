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


export const sleep = (second = 0) =>
    new Promise((resolve, _) => setTimeout(() => resolve(), second * 1000))

export const classNames = (...className) => className.join(' ')

export const exeption = (obj) => {
    return (type) => {
        for (let key in obj)
            if (obj[key] && typeof obj[key] !== type)
                throw new Error(`${key} Must be String`)
    }
}
