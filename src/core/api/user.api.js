import { agentAxios } from ".";


export default {
    create: (user, config = {}) => agentAxios.post("/user", user, config),
    userInfo: (userInfo, config = {}) =>agentAxios.put("/userInfo", userInfo, config = {}),
};
