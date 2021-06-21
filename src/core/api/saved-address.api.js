import { agentAxios, endPoint } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    all: (config = {}) =>
        agentAxios.get(`${endPoint.SavedAddress}/`, config),
    list: (params, config = {}) =>
        agentAxios.list(`${endPoint.SavedAddress}/`, params, config),
    get: (savedaddressId, config = {}) =>
        agentAxios.get(`${endPoint.SavedAddress}/${savedaddressId}`, config),
    create: (savedaddress, config = {}) =>
        agentAxios.post(`${endPoint.SavedAddress}/`, savedaddress, config),
    update: (savedaddressId, savedaddress, config = {}) =>
        agentAxios.put(`${endPoint.SavedAddress}/${savedaddressId}/`, savedaddress, config),
    delete: (savedaddressId, config = {}) =>
        agentAxios.del(`/${endPoint.SavedAddress}/${savedaddressId}/`, config)
};
