export const reducerAction = (type, payload) => ({ type, payload });

export const errorRequest = (type, error) => {
    let payload = null;

    console.log({error});

    if (error && error.response && error.response.data.message)
        payload = error.response.data.message;
    else if (error &&  error.message)
        payload = error.message;
    else
        payload = error;

    return { type, payload }
}
