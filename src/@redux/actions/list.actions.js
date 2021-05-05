import { io } from "socket.io-client";
import { listActionTypes } from "../@types";


const errorLoadList = (error, dispatch = () => { }) => {
    dispatch(listActionTypes.loadListFaild(error));
};

export const loadList = ({
    agentGet = async (config = {}) => { },
    pageNumber,
    pageSize,
    search,
    keyList,
}) => async (dispatch, getState) => {

    const config = {
        // headers: {
        //     Authorization: `${""}`,
        // },
    };

    dispatch(listActionTypes.startRequest(keyList));
    try {

        // const d= 
        const paramsReq = {
            pageNumber,
            pageSize,
            search
        };
        const data = await agentGet(paramsReq, config);
        console.log({ paramsReq, data });
        await new Promise((res, rej) => {
            setTimeout(() => res(), 300)
        })

        if (data.success == false) {
            alert("داده ای یافت نشد");
            throw data.message;
        }

        dispatch(listActionTypes.loadListSuccess({
            keyList,
            list: data.results || [],
            counts: data.count || 0,
            pageNumber,
            pageSize,
            search
        }));
    } catch (error) {
        console.log({ error })
        // dispatch(listActionTypes.loadListFaild(error));
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

