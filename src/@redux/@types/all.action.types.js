export const reducerAction = (type, payload) => ({ type, payload });

export const errorRequest = (type, error) => {

    const payload = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    return { type, payload }
}
