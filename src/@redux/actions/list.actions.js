import { io } from "socket.io-client";
import { listActionTypes } from "../@types";


const errorLoadList = (error, dispatch = () => { }) => {
    dispatch(listActionTypes.loadListFaild(error));
};

export const loadList = ({
    agentGet = async (config = {}) => { },
    pageNumber,
    pageSize,
    keyList,
}) => async (dispatch, getState) => {
    const auth = getState().auth;

    // const config = {
    //     headers: {
    //         Authorization: `${""}`,
    //     },
    // };

    dispatch(listActionTypes.startRequest(keyList));
    try {
        // const data = await agentGet(config);


        await new Promise((res, rej) => {
            setTimeout(() => res(), 3000)
        })
        

        const xx = {
            keyList,
            list: [],
            counts: 50,
            pageNumber,
            pageSize
        }
        dispatch(listActionTypes.loadListSuccess(xx));


    } catch (error) {
        dispatch(listActionTypes.loadListFaild(error));
    } finally {
        dispatch(listActionTypes.finishedRequest(keyList));
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

