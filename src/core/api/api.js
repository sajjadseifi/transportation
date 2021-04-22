import axios from "axios";
import { store } from "../../@redux/store";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/";

export let source = axios.CancelToken.source();
export let config = { cancelToken: source.token };

axios.defaults.baseURL = baseURL;

axios.get(baseURL, config).then((res) => { });

axios.interceptors.request.use((config) => {
    // const token = localStorage.getItem("jwt");
    const { userInfo } = store.getState().auth;

    const token = userInfo.token ?
        userInfo.token :
        'Basic ' + new Buffer('shid' + ':' + 'test').toString('base64');

    config.headers["Authorization"] = token;

    config.headers["Content-Type"] = "application/json";

    source = axios.CancelToken.source();
    config.cancelToken = source.token;

    return config;
});

axios.interceptors.response.use(undefined, (error) => {
    const isCancel = axios.isCancel(error);

    if (isCancel == false)
        throw error;

    if (!error.response)
        if ((error.message = "Network Error")) {
            //net work connection...
        }
        else {
            const { status } = error.response;
            let message = null;
            switch (status) {
                case 500:
                    message = "Server Is Error - check your terminal";
                    break;
                case 400:
                    // message = "Server Is Error - check your terminal";
                    break;
                case 404:
                    // message = "Server Is Error - check your terminal";
                    break;
                default:
                    throw error;
            }
            //show mesasge...
        }
});

const responseBody = (response) => (response ? response.data : response);

export const request = {
    get: (url, config = {}) => axios.get(url, config).then(responseBody),
    post: (url, body = {}, config = {}) => axios.post(url, body, config).then(responseBody),
    put: (url, body = {}, config = {}) => axios.put(url, body, config).then(responseBody),
    del: (url, config = {}) => axios.delete(url, config).then(responseBody),
    postForm: (url, blob) => {
        const formData = new FormData();
        formData.append("File", blob);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            },
            mode: "cors",
        };
        return axios.post(url, formData, config).then(responseBody);
    },
};

export default axios;
