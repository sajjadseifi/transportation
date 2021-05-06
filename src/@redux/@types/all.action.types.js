export const reducerAction = (type, payload) => ({ type, payload });

export const errorRequest = (type, error) => {
    let payload = null;

    console.log({error});

    if (error && error.response && error.response.data)
        payload = error.response.data;
    else if (error &&  error.message)
        payload = error.message;
    else
        payload = error;

    return { type, payload };
}
