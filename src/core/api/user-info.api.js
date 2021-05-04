import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/userinfo`, config),
    list: (params, config = {}) => agentAxios.get(`/userinfo?page=${params.pageNumber}`, config),//&pagesize=${params.pageSize}
    get: (userId, config = {}) => agentAxios.get(`/userinfo/${userId}`, config),
    create: (user, config = {}) => agentAxios.post("/userinfo", user, config),
    update: (userId, user, config = {}) => agentAxios.put(`/userinfo/${userId}`, user, config),
    delete: (userId, config = {}) => agentAxios.del(`/userinfo/${userId}`, config),
};
