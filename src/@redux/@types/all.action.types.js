export const reducerAction = (type, payload) => ({ type, payload });

export const errorRequest = (type, error) => {
    let payload = null;

    if (error.response && error.response.data.message)
        payload = error.response.data.message;
    else if (error.message)
        payload = error.message;
    else
        payload = error;

    return { type, payload }
}
