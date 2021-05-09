import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/users/`, config),
    list: (params, config = {}) => {

        const str = params.search ? "username=" + params.search : "";
        return agentAxios.list("/users", { ...params, str }, config);
    },
    get: (userId, config = {}) => agentAxios.get(`/users/${userId}`, config),
    create: (user, config = {}) => agentAxios.post("users/", user, config),
    update: (userId, user, config = {}) => agentAxios.put(`/users/${userId}/`, user, config),
    delete: (userId, config = {}) => agentAxios.del(`/users/${userId}/`, config)
};

