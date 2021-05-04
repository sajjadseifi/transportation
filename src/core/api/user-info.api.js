import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/userinfo`, config),
    get: (userId, config = {}) => agentAxios.get(`/userinfo/${userId}`, config),
    create: (user, config = {}) => agentAxios.post("/userinfo", user, config),
    update: (userId, user, config = {}) => agentAxios.put(`/userinfo/${userId}`, user, config),
    delete: (userId, config = {}) => agentAxios.del(`/userinfo/${userId}`, config),
};
