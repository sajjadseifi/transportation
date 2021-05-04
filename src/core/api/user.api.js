import { agentAxios } from ".";


export default {
    all: (config = {}) => agentAxios.get(`/user`, config),
    get: (userId, config = {}) => agentAxios.get(`/user/${userId}`, config),
    create: (user, config = {}) => agentAxios.post("/user", user, config),
    update: (userId, user, config = {}) => agentAxios.put(`/user/${userId}`, user, config),
    delete: (userId, config = {}) => agentAxios.del(`/user/${userId}`, config)
};
