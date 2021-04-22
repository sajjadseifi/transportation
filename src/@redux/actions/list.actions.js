import { listActionTypes } from "../@types";


const errorLoadList = (error, dispatch = () => { }) => {
    dispatch(listActionTypes.loadListFaild(error));
};

export const loadList = (agentGet = async (config = {}) => { },) => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState();

    const config = {
        headers: {
            Authorization: `${userInfo.token}`,
        },
    };

    dispatch(listActionTypes.startRequest());
    try {
        console.log(userInfo);
        const data = await agentGet(config);

        dispatch({ type: QUESTION_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch(listActionTypes.loadListFaild(error));
    } finally {
        dispatch(listActionTypes.finishedRequest());
    }
};


export const loadListWithSocket = () => async (dispatch, getState) => {
    dispatch(listActionTypes.startRequest());
    const {
        userLogin: { userInfo },
    } = getState();

    const socket = io('http://club.negarestoun.ir', {
        reconnectionDelayMax: 10000,
        auth: {
            token: userInfo.token,
        },
        query: {
            tocken: userInfo.token,
        },
    });
    socket.on('getTickets', (data) => {
        if (data.status === 1)
            // data succesesMessage
            dispatch(listActionTypes.loadListSuccess(data));
        else
            errorLoadList.bind(dispatch);

        dispatch(listActionTypes.finishedRequest());
        socket.disconnect();
    });
    socket.on('getError', (error) => {
        dispatch(listActionTypes.finishedRequest());
        errorLoadList(error, dispatch);
        socket.disconnect();
    });
};

